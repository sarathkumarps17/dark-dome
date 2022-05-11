import React, { useState } from "react";

function InformUs({ id }) {
  const [state, setState] = useState({
    subject: "",
    body: "",
    priority: "normal",
  });
  const handleChange = (e) => {
    let { name, value } = e.target;
    setState((preVal) => {
      return { ...preVal, [name]: value };
    });
  };
  const handleSubmit = () => console.log(state);
  return (
    <div id={id} className="inform_us">
      <div className="inform_us-description">description....</div>
      <div className="inform_us-form">
        <div className="inform_us-form-row">
          <div className="inform_us-form-col">
            <label className="inform_us-form-label">Subject</label>
          </div>

          <div className="inform_us-form-col">
            <input
              placeholder="Subject"
              className="inform_us-form-subject"
              name="subject"
              value={state.subject}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="inform_us-form-row">
          <div className="inform_us-form-col">
            <label className="inform_us-form-label">Matter</label>
          </div>
          <div className="inform_us-form-col">
            <textarea
              className="inform_us-form-body"
              name="body"
              value={state.body}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="inform_us-form-row">
          <div className="inform_us-form-col">
            <label className="inform_us-form-label">Priority</label>
          </div>
          <div className="inform_us-form-col">
            <select
              className="inform_us-form-select"
              name="priority"
              value={state.priority}
              onChange={handleChange}>
              <option value="normal">Normal</option>
              <option value="low">Low</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>

        <div className="inform_us-form-row">
          <div className="inform_us-form-col">
            <button className="inform_us-form-submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InformUs;
