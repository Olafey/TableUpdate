Here’s a description of a web application where a table dynamically increases with each submission of information through an input field. The application is built using **HTML**, **CSS**, and **JavaScript**.

---

# Dynamic Table Creation and Expansion

This project demonstrates how to dynamically create and expand a table based on user input using HTML, CSS, and JavaScript. The application allows users to submit information through input fields, which is then added as a new row in a table. Every time the user submits new data, a new row is created and appended to the table, effectively expanding it. The purpose of this project is to simulate data entry and record-keeping in a simple and interactive web interface.

## Features

1. **Dynamic Table Creation**: A table is generated in real-time as users submit data through the input fields. Initially, the table has a header, and new rows are added upon each submission.
   
2. **Input Handling**: The app includes input fields for collecting specific user information (e.g., Name, Age, and Course). When the user clicks the "Add" button, the entered data is processed and inserted into the table.

3. **Row Expansion**: Every time the user submits new information, a new row is added to the table, with each row displaying the data entered by the user.

4. **Validation**: The input fields are validated to ensure that the user fills out all fields before submitting the data. If any field is left empty, the user is prompted to complete it.

5. **Delete Option**: Each row includes a delete button, which allows users to remove individual rows from the table if necessary.

## How It Works

1. **Input Fields**: The form consists of input fields for specific data (e.g., Name, Age, and Course). The user fills in the fields and clicks an "Add" button.
   
2. **Adding a Row**: When the "Add" button is clicked, the values from the input fields are collected. If all fields are filled, a new row is inserted at the end of the table.

3. **Clear Inputs**: After the data is added to the table, the input fields are automatically cleared, allowing the user to input new data for the next submission.

4. **Row Removal**: Each row in the table includes a "Delete" button, which allows the user to remove the row from the table. Clicking the delete button instantly removes the corresponding row without affecting the rest of the table.

## Technologies Used

- **HTML**: For the structure of the input fields and the table layout.
- **CSS**: For styling the form and the table, providing a clean and responsive design.
- **JavaScript**: For handling the logic of adding new rows to the table, validating input, and removing rows.

## Example Usage Scenario

1. The user enters a **name**, **age**, and **course** in the input fields.
2. Upon clicking the "Add" button, the data is added as a new row in the table.
3. If more information is submitted, additional rows will appear in the table.
4. Each row in the table has a delete button to remove it if needed.
