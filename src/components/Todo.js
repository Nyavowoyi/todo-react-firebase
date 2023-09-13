import { DeleteForever } from "@mui/icons-material";
import { List, ListItem, ListItemAvatar, ListItemText } from "@mui/material"
import { db } from "../firebase";
import './Todo.css';

const Todo = ( { arr }) => {
    console.log(arr);
    return (
        <List className="todo__list">
            <ListItem>
                <ListItemAvatar />
                <ListItemText primary={arr.item.todo} secondary={arr.item.todo} />
            </ListItem>
            <DeleteForever fontSize="large" onClick={() => {db.collection('todos').doc(arr.id).delete()}} />
        </List>
    )
}

export default Todo;