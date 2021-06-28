import React, { useState } from "react";

const Dashboard = (props) => {
    const [insert, setInsert] = useState(0);
    const [del, setDel] = useState(0);
    const [find, setFind] = useState(0);

    const insertValue = () => {
        props.setInsert(insert.toString());
        props.setDelete('');
        props.setFind('');
        setInsert(0);
    }

    const deleteValue = (e) => {
        // e.preventDefault();
        // console.log("Delete: "+del);
        props.setDelete(del.toString());
        props.setFind('');
        props.setInsert('');
        setDel(0);
    }

    const findValue = (e) => {
        // e.preventDefault();
        // console.log("Find: "+find);
        props.setFind(find.toString());
        props.setInsert('');
        props.setDelete('');
        setFind(0);
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <input type='number' className='insertField' value={insert} onChange={e => setInsert(e.target.value)} />
            <input type='submit' className='submitInsert' onClick={insertValue} value='Insert' /><br />
            <input type='number' className='deleteField' value={del} onChange={e => setDel(e.target.value)} />
            <input type='submit' className='submitDelete' onClick={deleteValue} value='Delete' /><br />
            <input type='number' className='findField' value={find} onChange={e => setFind(e.target.value)}/>
            <input type='submit' className='submitFind' onClick={findValue} value='Find' /><br />
        </div>
    );
}

export default Dashboard;