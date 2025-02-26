import { JSX } from "react";

export interface ITask {
  id: number;
  title: string;
  status: string;
  mark: string;
  isCompleted: boolean;
}

export interface ISummary {
  id: number;
  name: string;
  manager: string;
  date: string;
  status: string;
  progress: string;
}

export interface IOverview {
  id: number;
  title: string;
  numbers: string;
  descriptions: string;
  icon: JSX.Element;
  rate: JSX.Element;
}
