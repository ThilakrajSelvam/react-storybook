import React from "react";
import { formComponentsMock } from "./mock/formComponentsMock";
import { Data, Form } from "./stories/form/Form";

function App() {
  return (
    <Form
      formComponents={formComponentsMock}
      onSubmit={(data: Data) => console.log(data)}
      onReset={() => console.log("Form reset")}
    ></Form>
  );
}

export default App;
