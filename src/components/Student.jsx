import React from "react";
import { useState } from "react";

const Student = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [lists, setLists] = useState([]);

    const [action, setAction] = useState({ type: "submit", id: "" });

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handlePhone = (e) => {
        setPhone(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = () => {
        if (action.type === "submit") {
            setLists([
                ...lists,
                {
                    name,
                    phone,
                    email,
                },
            ]);
        } else {
            const studentIndex = lists.findIndex(
                (list, index) => index === action.id
            );
            lists[studentIndex] = {
                name,
                phone,
                email,
            };
            setLists(lists);
            setAction({ type: "submit", id: "" });
        }
        setName("");
        setPhone("");
        setEmail("");
    };

    const handleEdit = (id) => {
        setName(lists[id].name);
        setPhone(lists[id].phone);
        setEmail(lists[id].email);
        setAction({ type: "edit", id });
    };

    const handleDelete = (id) => {
        const newLists = lists.filter((list, index) => index !== id);
        setLists(newLists);
    };

    return (
        <div className="container">
            <h1>Student List</h1>
            <label htmlFor="">Name:</label>
            <input type="text" onChange={handleName} value={name} />
            <br />
            <br />
            <label htmlFor="">Phone:</label>
            <input type="text" onChange={handlePhone} value={phone} />
            <br />
            <br />
            <label htmlFor="">Email:</label>
            <input type="text" onChange={handleEmail} value={email} />
            <br />
            <br />
            <button className="btn btn-success" onClick={handleSubmit}>
                {action.type === "submit" ? "Submit" : "Edit"}
            </button>
            <br />
            <br />
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Phone</td>
                        <td>Email</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {lists.map((list, index) => (
                        <tr key={index}>
                            <td>{list.name}</td>
                            <td>{list.phone}</td>
                            <td>{list.email}</td>
                            <td>
                                <button
                                    className="btn btn-warning"
                                    onClick={() => handleEdit(index)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(index)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Student;
