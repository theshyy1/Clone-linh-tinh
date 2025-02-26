import { useFormik } from "formik";
import { AnimatePresence, motion } from "framer-motion";
import { useContext, useState } from "react";
import * as Yup from "yup";
import {
  progressOptions,
  statusOptions,
} from "../../assets/static-data/resource";
import { Button } from "../../components/common/button";
import { Error } from "../../components/common/errors";
import { Input } from "../../components/common/input";
import { Label } from "../../components/common/label";
import { Select } from "../../components/common/select";
import { ProjectContext } from "../../contexts/project/list-project-context";
import { FormValues, IProject } from "../../models/project-model";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(6, "Name project should be a fully name ")
    .required("Name is required"),
  manager: Yup.string()
    .min(2, "Name is so short")
    .required("Manager is required"),
  date: Yup.date().required("Date is required"),
  status: Yup.string().required("Status is required"),
  progress: Yup.string().required("Progress is required"),
});

export const CreateProjectContainer = () => {
  const [customValue, setCustomValue] = useState("");
  const {
    allProjects,
    selectedItem,
    addProject,
    updateProject,
    handleEditDone,
    isOpenForm,
  } = useContext(ProjectContext);

  const formatProgressValue = (progressValue: string) => {
    if (typeof progressValue === "string" && !progressValue.endsWith("%")) {
      return `${progressValue}%`;
    }
    return progressValue;
  };

  const validateProjetValue = (
    values: { name: string; date: string },
    projects: IProject[],
    selectedItem: IProject | null
  ) => {
    const errors: { name?: string; date?: string } = {};

    if (!selectedItem) {
      if (projects.some((item: IProject) => item.name === values.name)) {
        errors.name = "Cannot use this name!";
      }
      const now = new Date();
      const dueDate = new Date(values.date);

      if (now >= dueDate) {
        errors.date = "Date is unexpectedly";
      }
    }

    if (
      projects.some(
        (item: IProject) =>
          item.name === values.name && item.id !== selectedItem?.id
      )
    )
      errors.name = "This name is already existed!";
    return errors;
  };

  const handleAddProject = (
    values: any,
    customValue: string,
    projects: IProject[]
  ) => {
    const errors = validateProjetValue(values, projects, selectedItem);
    if (Object.keys(errors).length > 0) {
      return errors;
    }
    const newProject = {
      ...values,
      progress: `${customValue ? customValue : values.progress}%`,
      id: Date.now(),
    };
    addProject(newProject);
  };

  const handleUpdateProject = (
    selectedItem: IProject,
    values: any,
    formatProgressValue: string,
    projects: IProject[]
  ) => {
    const errors = validateProjetValue(values, projects, selectedItem);
    if (Object.keys(errors).length > 0) {
      return errors;
    }
    const newValueUpdated = {
      ...selectedItem,
      ...values,
      progress: formatProgressValue,
    };
    updateProject(newValueUpdated);
  };

  const {
    handleChange,
    handleSubmit,
    errors,
    values,
    resetForm,
    setErrors,
    handleBlur,
    touched,
  } = useFormik<FormValues>({
    initialValues: {
      name: selectedItem?.name || "",
      manager: selectedItem?.manager || "",
      date: selectedItem?.date || "",
      status: selectedItem?.status || "",
      progress: selectedItem?.progress || "",
    },
    validationSchema,
    onSubmit: (values) => {
      const progressValue = customValue || values.progress;
      const formattedProgressValue = formatProgressValue(progressValue);

      if (selectedItem) {
        const errors = handleUpdateProject(
          selectedItem,
          values,
          formattedProgressValue,
          allProjects
        );
        if (errors) {
          setErrors(errors);
          return;
        }
      } else {
        const errors = handleAddProject(values, customValue, allProjects);
        if (errors) {
          setErrors(errors);
          return;
        }
      }
      setCustomValue("");
      resetForm();
      handleEditDone();
    },
    enableReinitialize: true,
  });

  return (
    <>
      {isOpenForm && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <form className="mx-auto" onSubmit={handleSubmit}>
              <span className="block pb-4 text-center text-3xl italic text-orange">
                {selectedItem ? "Edit project here!" : "Create more new"}
              </span>
              <div className="mx-10 grid grid-cols-12 gap-10 space-x-10">
                <div className="col-span-6 pl-10">
                  <div className="group relative z-0 mb-5 w-full">
                    <Input
                      type="text"
                      name="name"
                      placeholder="Name"
                      onChange={handleChange}
                      value={values.name}
                      onBlur={handleBlur}
                    />
                    <Label htmlFor="name-project">Name</Label>
                    {touched.name && errors.name && (
                      <Error>{errors.name}</Error>
                    )}
                  </div>
                  <div className="group relative z-0 mb-5 w-full">
                    <Input
                      type="text"
                      name="manager"
                      placeholder="Manager Project"
                      onChange={handleChange}
                      value={values.manager}
                    />
                    <Label htmlFor="manager-project">Manager Project</Label>
                    {touched.manager && errors.manager && (
                      <Error>{errors.manager}</Error>
                    )}
                  </div>
                  <div className="group relative z-0 mb-5 w-full">
                    <Input
                      type="date"
                      name="date"
                      placeholder="Date"
                      onChange={handleChange}
                      value={values.date}
                    />
                    <Label htmlFor="date-time">Date</Label>
                    {touched.date && errors.date && (
                      <Error>{errors.date}</Error>
                    )}
                  </div>
                </div>
                <div className="col-span-6 pr-10">
                  <div className="group relative z-0 mb-5 w-full">
                    <Select
                      onChange={handleChange}
                      name="status"
                      value={values.status}
                      id="status"
                      renderList={statusOptions}
                    />
                    <Label htmlFor="status">Status</Label>
                    {touched.status && errors.status && (
                      <Error>{errors.status}</Error>
                    )}
                  </div>
                  <div className="group relative z-0 mb-5 w-full">
                    <Select
                      name="progress"
                      id="progress"
                      value={values.progress}
                      renderList={progressOptions}
                      onChange={handleChange}
                    />
                    <Label htmlFor="progress">Progress</Label>
                    {touched.progress && errors.progress && (
                      <Error>{errors.progress}</Error>
                    )}
                  </div>
                  <div className="group relative z-0 mb-5 w-full">
                    <input
                      type="number"
                      name="progress"
                      id="custom-value"
                      placeholder="Or enter custom value"
                      value={customValue}
                      onChange={(event) => setCustomValue(event.target.value)}
                      min="0"
                      max="100"
                      className="text-text-light/90 bg-background-light border-text-light peer mt-2 block w-full appearance-none border-0 border-b-2 px-0 py-2.5 text-sm focus:outline-none focus:ring-0" // Added margin top
                    />
                    <Label htmlFor="custom-value">Custom Value</Label>
                  </div>
                </div>
              </div>
              <div className="item-center flex justify-center space-x-4 py-5">
                <Button
                  type="submit"
                  className="bg-success hover:bg-error/80 focus:ring-error/30 mb-2 me-2 rounded-lg px-5 py-2.5 text-sm font-medium text-white focus:outline-none focus:ring-4"
                >
                  Submit
                </Button>
                <Button
                  type="button"
                  onClick={handleEditDone}
                  className="bg-warning hover:bg-warning/80 mb-2 me-2 rounded-lg px-5 py-2.5 text-sm font-medium text-white focus:outline-none"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
};
