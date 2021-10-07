import "./styles.css";
import { Todo } from "./components/todo/index";

export const AllTodosPage = () => {
    return (
        <div>
            <Todo
                text="Walk my dog" date="10/10/2021" color = "blue"
                />
            
            <Todo
            text="Buy laundry detergent"
            date="10/10/2021" color="blue"
            />
            
            <Todo
            text="Go Workout :(" date="10/10/2021" color="blue"
            />
            

         </div>
    )
}