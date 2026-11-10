
# React Side Effects & useEffect — Placepicker Application

## 1. Section Overview

In this section, we will build and enhance a **Placepicker application** that allows users to:

- View a collection of available places.
- Select places they might want to visit.
- Add selected places to their picked places list.
- Remove places they no longer want to visit.

The main objective of this section is to understand one of the most important React concepts: **Side Effects and Side Effect Management**.

We will learn what side effects are, why they are needed, and how React provides tools to manage them.

---

## 2. Main Learning Objectives

Throughout this section, we will cover:

1. Understanding side effects in React.
2. Why side effects are needed in applications.
3. Understanding the `useEffect` hook.
4. Using `useEffect` to manage side effects.
5. Understanding effect dependencies.
6. Managing and controlling dependencies.
7. Understanding when to use `useEffect`.
8. Learning when NOT to use `useEffect`.

---

## 3. What Is the Placepicker Application?

Placepicker is an application where users can select places they might want to visit.

The application already has basic functionality:

- Display available places.
- Select places.
- Delete selected places.

We will enhance this application throughout the section while learning how side effects work in React.

---

## 4. Existing Project Structure

The starting project contains several components and utility files.

### Components

The application uses multiple components that handle different parts of the UI.

These components already use React concepts learned in previous sections:

- `useState` – Managing component state.
- `useRef` – Accessing DOM elements and storing references.
- `useImperativeHandle` – Exposing custom methods through refs.

### Utility Files

**`data.js`**

- Contains dummy data.
- Provides the collection of places displayed as cards in the application.

**`loc.js`**

- Contains location calculation logic.
- Provides functions related to calculating locations.
- Will be used in upcoming lectures to demonstrate side effects.

---

## 5. Previously Learned Concepts Used in This Project

This project also revisits concepts from previous React sections.

| Concept | Purpose |
|---|---|
| `useState` | Managing the picked places array |
| `useRef` | Working with references |
| `useImperativeHandle` | Exposing custom functions through refs |
| Props | Passing data between components |
| Component Composition | Dividing the UI into reusable components |

### Important: React 19 Ref Handling

This project uses a React version that supports receiving `ref` directly as a prop.

Therefore, the modal component can receive and extract `ref` as a regular prop without using `forwardRef`.

---

## 6. What Are Side Effects?

Side effects are operations that interact with something outside the normal React rendering process.

This section will explain what side effects are, why they occur, and how they should be managed.

We will explore these concepts practically through the Placepicker application.

---

## 7. Understanding `useEffect`

`useEffect` is a React hook used to manage side effects in functional components.

It allows React components to synchronize with external systems.

In this section, we will learn:

- How to use `useEffect`.
- How to manage effect dependencies.
- How dependency changes affect effect execution.
- When an effect should run.
- When `useEffect` is unnecessary.

---

## 8. Section Learning Flow

```text
Placepicker Application
          |
          v
 Understanding Side Effects
          |
          v
 Why Side Effects Are Needed
          |
          v
      useEffect Hook
          |
          v
 Managing Dependencies
          |
          v
 Controlling Effect Execution
          |
          v
 When to Use useEffect
          |
          v
 When NOT to Use useEffect
          |
          v
 Enhance the Placepicker App
```

---

## 9. Final Learning Goal

By completing this section, the goal is to understand how React handles side effects and how to use `useEffect` correctly.

We will also gain practical experience managing side effects in a real React application rather than learning the concepts only through isolated examples.

**Main Focus:** Side Effects, `useEffect`, Dependencies, and Proper Effect Management.

---

*Project: Placepicker Application*  
*Topic: React Side Effects & useEffect*