import { RootState } from "../store";

export const isGettingEvaluateSelector = (state: RootState) =>
  state.evaluate.isGettingEvaluate;

export const isGettingEvaluatesSelector = (state: RootState) =>
  state.evaluate.isGettingEvaluates;

export const isCreatingEvaluateSelector = (state: RootState) =>
  state.evaluate.isCreatingEvaluate;

export const isUpdatingEvaluateSelector = (state: RootState) =>
  state.evaluate.isUpdatingEvaluate;

export const isDeletingEvaluateSelector = (state: RootState) =>
  state.evaluate.isDeletingEvaluate;

export const evaluateSelector = (state: RootState) => state.evaluate.evaluate;

export const evaluatesSelector = (state: RootState) => state.evaluate.evaluates;

export const evaluateResponseSelector = (state: RootState) => state.evaluate.response;
