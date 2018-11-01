import React, { Component } from 'react';

class AddProject extends Component {
    constructor() {
        super();
        this.state = {
            newProject: {}
        }
    }

    static defaultProps = {
        categories: ['Web Development', 'Web Design', 'Mobile Development']
    }

    handleSubmit(e) {
        this.setState({
            newProject: {
                title: this.refs.title.value, 
                category: this.refs.category.value
            }}, function(){
                this.props.addProject(this.state.newProject);
            
        });
        e.preventDefault();
    }

    render() {
        let options = this.props.categories.map((category) => {
            return (
                <option value={category}>{category}</option>
            )
        });
        return (
        <div className="AddProject">
            <h3>Add Project</h3>
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div>
                    <label>Title</label>
                    <input type='text' ref='title'></input>
                </div>
                <div>
                    <label>Category</label>
                    <select ref='category'>
                        {options}
                    </select>
                </div>
                <input type='submit' value='submit'/>
            </form>
        </div>
    );
  }
}

export default AddProject;