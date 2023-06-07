import React, { useEffect, useState } from "react";
import "./AdminHome.css";
import AdminOrderItem from "../components/AdminOrderItem";
import { userReq } from "../reqMethods";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ChartContainer from "../components/ChartContainer";

const AdminHome = () => {
  const [value, setValue] = useState(0);
  const [orders, setOrders] = useState([]);
  const [items, setItems] = useState({});
  const [reset, setReset] = useState(0);




  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 2, height: 140 }}>{children}</Box>}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const getOrders = async () => {
      userReq.get("/order/all/yes").then((res) => {
        setOrders(res.data);
      });
      userReq.get("/order/allitems").then((res) => {
        setItems(res.data);
        console.log(res.data);
      });
    };
    getOrders();
  }, [reset]);

  return (
    <div className="adminContainer">
      <div className="subCon sales">
        <ChartContainer />
      </div>
      <div className="subCon orderManage">
        <h1>Orders</h1>
        <div className="adminOrderList">
          {orders.map((order) =>
            <AdminOrderItem reset={setReset} order={order} />
          )}
        </div>
      </div>
      <div className="subCon inventory">
        {/* mui wala */}
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="BASE" {...a11yProps(0)} />
              <Tab label="VEGGIES" {...a11yProps(1)} />
              <Tab label="SAUCE" {...a11yProps(2)} />
              <Tab label="CHEESE" {...a11yProps(3)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <div class="subItem">
              <h3 class="subThing">
                Regular : <span>25</span> <button className="invBtn">+</button>
              </h3>
              <h3 class="subThing">
                ThinCrust :<span>25</span> <button className="invBtn">+</button>
              </h3>
              <h3 class="subThing">
                ThickCrust :<span>25</span>{" "}
                <button className="invBtn">+</button>
              </h3>
              <h3 class="subThing">
                GlutenFree :<span>25</span>{" "}
                <button className="invBtn">+</button>
              </h3>
              <h3 class="subThing">
                StuffedCrust : <span>25</span>
                <button className="invBtn">+</button>
              </h3>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div className="subItem">
              <h3 class="subThing">
                Mushrooms : <span>25</span>{" "}
                <button className="invBtn">+</button>
              </h3>
              <h3 class="subThing">
                Onions : <span>30</span> <button className="invBtn">+</button>
              </h3>
              <h3 class="subThing">
                Peppers : <span>30</span> <button className="invBtn">+</button>
              </h3>
              <h3 class="subThing">
                Olives : <span>30</span> <button className="invBtn">+</button>
              </h3>
              <h3 class="subThing">
                Jalapeno : <span>29</span> <button className="invBtn">+</button>
              </h3>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div className="subItem">
              <h3 class="subThing">
                Alfredo : <span>26</span> <button className="invBtn">+</button>
              </h3>
              <h3 class="subThing">
                Pesto : <span>30</span> <button className="invBtn">+</button>
              </h3>
              <h3 class="subThing">
                Marinara : <span>28</span> <button className="invBtn">+</button>
              </h3>
              <h3 class="subThing">
                WhiteGarlic : <span>29</span>
                <button className="invBtn">+</button>
              </h3>
              <h3 class="subThing">
                GarlicRanch : <span>30</span>
                <button className="invBtn">+</button>
              </h3>
            </div>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <div className="subItem">
              <h3 class="subThing">
                Mozzarella : <span>25</span>
                <button className="invBtn">+</button>
              </h3>
              <h3 class="subThing">
                Cheddar : <span>29</span> <button className="invBtn">+</button>
              </h3>
              <h3 class="subThing">
                Parmesan : <span>30</span> <button className="invBtn">+</button>
              </h3>
              <h3 class="subThing">
                Provolone : <span>29</span>{" "}
                <button className="invBtn">+</button>
              </h3>
              <h3 class="subThing">
                Ricotta : <span>30</span> <button className="invBtn">+</button>
              </h3>
            </div>
          </TabPanel>
        </Box>
      </div>
      <div className="subCon stat"></div>
    </div>
  );
};

export default AdminHome;
