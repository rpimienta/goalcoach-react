import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCompleted } from '../actions'
import { completeGoalRef,goalRef } from '../firebase';
import GoalItem from './GoalItem';

class CompleteGoalList extends Component {
    componentDidMount() {       
        completeGoalRef.on('value', snap => { 
            let completeGoals = [];
            snap.forEach( completeGoal => {
                const { email, title } = completeGoal.val();
                completeGoals.push({ email, title });
            })
            this.props.setCompleted(completeGoals);
        });
    }

    clearCompleted() {
        completeGoalRef.set([]);
    }

    render() {
        return(
            <div>
                {
                    this.props.completedGoals.map( (completedGoal,index) => {
                        const { email, title } = completedGoal;
                        return(
                            <div key={index}>
                                <strong>{title}</strong> completed by <em> {email}</em>
                            </div>
                        )
                    })
                }
                <button 
                    className="btn btn-primary"
                    onClick={ () => this.clearCompleted()}
                >
                    ClearAll
                </button>
            </div>
        )
    }
}
function mapStateToProps(state) {
    const { completedGoals } = state;
    return{
        completedGoals
    };
}

export default connect(mapStateToProps, {setCompleted})(CompleteGoalList);