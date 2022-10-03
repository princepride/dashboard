import React from 'react';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban';

import { kanbanData } from '../data/userData';
import { kanbanGrid } from '../data/dummy';
import { Header } from '../components';

const Todo = () => {
    const fields = [
        { text: 'ID', key: 'Id', type: 'Input' },
        { key: 'Status', type: 'DropDown' },
        { key: 'Estimate', type: 'Numeric' },
        { key: 'Summary', type: 'TextArea' }
    ];

    const columnTemplate = (props) => {
        return (<div className="header-template-wrap">
            <div className="header-text">{props.headerText}</div>
        </div>);
    }

    return (
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
            <Header category="App" title="Todo List" />
            <KanbanComponent id="kanban" keyField="Status" cssClass="kanban-header" dataSource={kanbanData} cardSettings={{ contentField: "Summary", headerField: "Id" }} dialogSettings={{ fields: fields }}>
                <ColumnsDirective>
                    <ColumnDirective headerText="To Do" keyField="Open" template={columnTemplate.bind(this)} />
                    <ColumnDirective headerText="In Progress" keyField="InProgress" template={columnTemplate.bind(this)} />
                    <ColumnDirective headerText="Done" keyField="Close" template={columnTemplate.bind(this)} />
                </ColumnsDirective>
            </KanbanComponent>;
        </div>
    )
}

export default Todo