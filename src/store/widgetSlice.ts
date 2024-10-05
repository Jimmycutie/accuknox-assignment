import { createSlice } from "@reduxjs/toolkit";
import data from "../assets/data";

export interface ICategory {
  id: string;
  name: string;
  widgets: IWidget[];
}

export interface IWidget {
  id: string;
  name: string;
  text: string;
  flag: boolean;
}

interface Data {
  categories: ICategory[];
}
const initialState: Data = data;
const widgetSlice = createSlice({
  name: "widgets",
  initialState,
  reducers: {
    addWidget: (state, action) => {
      const { categoryId, widget } = action.payload;
      const category = state.categories.find((cat) => cat.id === categoryId);
      if (category) {
        category.widgets.push(widget);
      }
    },
    removeWidget: (state, action) => {
      const { categoryId, widgetId } = action.payload;
      return {
        ...state,
        categories: state.categories.map((category) =>
          category.id === categoryId
            ? {
                ...category,
                widgets: category.widgets.filter(
                  (widget) => widget.id !== widgetId
                ),
              }
            : category
        ),
      };
    },
    toggleWidgetFlag: (state, action) => {
      const { categoryId, widgetId, flag } = action.payload;
      const category = state.categories.find((cat) => cat.id === categoryId);
      if (category) {
        const widget = category.widgets.find(
          (widget) => widget.id === widgetId
        );
        if (widget) widget.flag = flag;
      }
    },
    widgetInputChange: (state, action) => {
      const { categoryId, widgetId, input } = action.payload;
      const category = state.categories.find((cat) => cat.id === categoryId);
      if (category) {
        const widget = category.widgets.find(
          (widget) => widget.id === widgetId
        );
        if (widget) widget.name = input;
      }
    },
  },
});

export const { toggleWidgetFlag, widgetInputChange } = widgetSlice.actions;
export const { addWidget, removeWidget } = widgetSlice.actions;
export default widgetSlice.reducer;
