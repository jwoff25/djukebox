import React, { Component } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export class Alert extends Component {
  render() {
    const { alerts } = this.props;
    return (
      <div>
        {alerts && alerts.length > 0 ? (
          // eslint-disable-next-line
          alerts.map(alert => {
            alert.type === "error"
              ? toast.error(alert.msg)
              : toast.success(alert.msg);
          })
        ) : (
          <span></span>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
