import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../App.css";
class Layout extends React.Component {
 
  render() {
    return (
      <React.Fragment>
        <div class="page">
          <div className="flex flex-row overflow-hidden">
            {this.props.children}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Layout;
