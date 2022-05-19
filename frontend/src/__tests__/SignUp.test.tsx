import React from 'react';
import {fireEvent, screen} from "@testing-library/react";
import * as ReactDOMClient from 'react-dom/client';
import {act} from "react-dom/test-utils"
import { BrowserRouter } from 'react-router-dom';
import { SignUp } from '../components/SignUp';
import { values } from "../util/SignUpConfig"

let container = document.createElement("div");

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container)
});

afterEach(() => {
  document.body.removeChild(container); 
});

test('All signup elements render', async() => {
  act(() => {
    ReactDOMClient.createRoot(container).render(<BrowserRouter><SignUp /></BrowserRouter>);
  });
  
  expect(screen.getByLabelText("Email:")).toBeInTheDocument
  expect(screen.getByLabelText("Username:")).toBeInTheDocument
  expect(screen.getByLabelText("Password:")).toBeInTheDocument
  expect(screen.getByLabelText("Confirm Password:")).toBeInTheDocument
  expect(screen.getByText("Create Account")).toBeInTheDocument
  expect(screen.getByText("Create Your Account")).toBeInTheDocument
});

// TODO:
// check input field values change on user input
// This has been done now! ~ Adrian Perez Gonzalez

test('Sing-Up Input Fields Test', async() => {
  act(() => {
    ReactDOMClient.createRoot(container).render(<BrowserRouter><SignUp /></BrowserRouter>);
  });

  const email = screen.getByLabelText("Email:");
  fireEvent.change(email, { target: { value: "foo@pdx.edu" } });
  // weird error with value, exists but doesn't think it does
  expect(email.value).toBe("foo@pdx.edu") 

  const username = screen.getByLabelText("Username:");
  fireEvent.change(username, { target: { value: "foo_bar" } });
  // weird error with value, exists but doesn't think it does
  expect(username.value).toBe("foo_bar") 

  const password = screen.getByLabelText("Password:");
  fireEvent.change(password, { target: { value: "Password123!@#" } });
  // weird error with value, exists but doesn't think it does
  expect(password.value).toBe("Password123!@#") 

  const verify_password = screen.getByLabelText("Confirm Password:");
  fireEvent.change(verify_password, { target: { value: "Password123!@#" } });
  // weird error with value, exists but doesn't think it does
  expect(password.value).toBe("Password123!@#") 
});