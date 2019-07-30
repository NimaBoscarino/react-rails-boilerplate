import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

export default class DropdownHoods extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    let toAlphabetize = []
    if (this.props.neighbourhoods) {
      toAlphabetize = [...this.props.neighbourhoods]
    }
    return (
      <div className='heatmap-filter'>
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>
            {" "}
            {this.props.currentNeighbourhood
              ? this.props.currentNeighbourhood.name
              : "Vancouver"}
          </DropdownToggle>
          <DropdownMenu>
          {toAlphabetize &&
            toAlphabetize
            .sort(function(a,b) {
              var nameA = a.name.toUpperCase();
              var nameB = b.name.toUpperCase();
              if (nameA > nameB) {
                return 1;
              }
              if (nameA < nameB) {
                return -1;
              }
              return 0;
            })
            .map((neighbourhood) => {
              return (
                <DropdownItem
                  onClick={() =>  {
                    this.props.clickNeighbourhood(neighbourhood.id);
                    this.props.changeShowOneHood(neighbourhood.id)
                  }}
                >
                  {neighbourhood.name}
                </DropdownItem>
              );
            })}
            <DropdownItem
            onClick={() => {
              this.props.removeMapCenterPlace()
              this.props.resetNeighbourhood()
              this.props.changeShowOneHood(null)
            }}
            >
              Vancouver Area
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}
