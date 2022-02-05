import React, { PureComponent } from "react";
// import classNames from "classnames";
import { Button, Space, DatePicker } from "antd";
import moment from "moment";
import { PoweroffOutlined } from "@ant-design/icons";

const { RangePicker } = DatePicker;

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loadings: [],
    };
  }
  onChange(dates, dateStrings) {
    console.log("From: ", dates[0], ", to: ", dates[1]);
    console.log("From: ", dateStrings[0], ", to: ", dateStrings[1]);
  }
  enterLoading = (index) => {
    this.setState(({ loadings }) => {
      const newLoadings = [...loadings];
      newLoadings[index] = true;

      return {
        loadings: newLoadings,
      };
    });
    setTimeout(() => {
      this.setState(({ loadings }) => {
        const newLoadings = [...loadings];
        newLoadings[index] = false;

        return {
          loadings: newLoadings,
        };
      });
    }, 6000);
  };

  render() {
    const { loadings } = this.state;
    return (
      <>
        <Space style={{ width: "100%" }}>
          <Button type="primary" loading>
            Loading
          </Button>
          <Button type="primary" size="small" loading>
            Loading
          </Button>
          <Button type="primary" icon={<PoweroffOutlined />} loading />
        </Space>

        <Space style={{ width: "100%" }}>
          <Button type="primary" loading={loadings[0]} onClick={() => this.enterLoading(0)}>
            Click me!
          </Button>
          <Button type="primary" icon={<PoweroffOutlined />} loading={loadings[1]} onClick={() => this.enterLoading(1)}>
            Click me!
          </Button>
          <Button
            type="primary"
            icon={<PoweroffOutlined />}
            loading={loadings[2]}
            onClick={() => this.enterLoading(2)}
          />
        </Space>

        <Space direction="vertical" size={12}>
          <RangePicker
            ranges={{
              Today: [moment(), moment()],
              "This Month": [moment().startOf("month"), moment().endOf("month")],
            }}
            onChange={this.onChange}
          />
          <RangePicker
            ranges={{
              Today: [moment(), moment()],
              "This Month": [moment().startOf("month"), moment().endOf("month")],
            }}
            showTime
            format="YYYY/MM/DD HH:mm:ss"
            onChange={this.onChange}
          />
        </Space>
      </>
    );
  }
}

//使用classNames
// export default class App extends PureComponent {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isActive: true,
//       isBar: false,
//     };
//   }

//   render() {
//     const { isActive, isBar } = this.state;
//     return (
//       <div>
//         <h2 className={"title foo active"}>哈哈哈</h2>
//         <h1 className={classNames({ active: isActive, isBar: isBar })}>使用classNames库</h1>
//       </div>
//     );
//   }
// }
