import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
class MyComponent extends React.Component {
  state = {
    arrJobs: [
      { id: "abcJob1", title: "Developer", salary: "500" },
      { id: "abcJob2", title: "Testers", salary: "400" },
      { id: "abcJob3", title: "Project managers", salary: "1000" },
    ],
  };

  addNewJob = (job) => {
    console.log("check job from parent", job);
    let currentJobs = this.state.arrJobs;
    currentJobs.push(job);
    this.setState({
      // arrJobs: [...this.state.arrJobs, job]
      arrJobs: currentJobs,
    });
  };

  deleteJob = (job) => {
    let currentJobs = this.state.arrJobs;
    console.log("cr", currentJobs);
    currentJobs = currentJobs.filter((item) => item.id !== job.id);
    this.setState({
      arrJobs: currentJobs,
    });
  };
  /**
   * JSX => return block
   */
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("check data input: ", this.state);
  };
  // re-render
  render() {
    console.log("call render", this.state);
    return (
      <>
        <AddComponent addNewJob={this.addNewJob} />

        <ChildComponent
          arrJobs={this.state.arrJobs}
          deleteJob={this.deleteJob}
        />
      </>
    );
  }
}

export default MyComponent;
