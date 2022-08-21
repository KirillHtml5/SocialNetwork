import React from 'react';

export class ProfileStatus extends React.Component<any, any> {

    state = {
        editMode: false
    }

    activateEditMode = () => {

        this.setState({
            editMode: true
        })

    }
    deactivateEditMode = () => {

        this.setState({
            editMode: false
        })

    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>props</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input type="text" value={'props'} onBlur={this.deactivateEditMode} autoFocus={true}/>
                    </div>
                }
            </div>
        );
    };
}

