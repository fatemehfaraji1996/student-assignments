import TodoContainer from "./TodoContainer"
import { render,screen } from "@testing-library/react";
const input = screen.getByPlaceholderText("write a todo"); // فرض بر این است که یک input با placeholder وجود دارد
 const button = screen.getByRole('button', { name:"Add Todo" }); // دکمه ارسال

 // ارسال اولین Todo
 fireEvent.change(input, { target: { value: 'First Todo' } });
 fireEvent.click(button);

 // بررسی وجود اولین Todo
 expect(screen.getByText('First Todo')).toBeInTheDocument();
 expect(screen.getAllByRole('listitem')).toHaveLength(1); // باید یک مورد در لیست باشد

 // ارسال دومین Todo
 fireEvent.change(input, { target: { value: 'Second Todo' } });
 fireEvent.click(button);

 // بررسی وجود هر دو Todo
 expect(screen.getByText('First Todo')).toBeInTheDocument();
 expect(screen.getByText('Second Todo')).toBeInTheDocument();
 expect(screen.getAllByRole('listitem')).toHaveLength(2); // باید دو مورد در لیست باشد

 // ارسال سومین Todo
 fireEvent.change(input, { target: { value: 'Third Todo' } });
 fireEvent.click(button);

 // بررسی وجود همه Todos
 expect(screen.getByText('First Todo')).toBeInTheDocument();
 expect(screen.getByText('Second Todo')).toBeInTheDocument();
 expect(screen.getByText('Third Todo')).toBeInTheDocument();
 expect(screen.getAllByRole('listitem')).toHaveLength(3); // باید سه مورد در لیست باشد

