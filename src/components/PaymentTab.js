import * as React from 'react';
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import CardPayment from "./CardPayment";
import PaymentIcon from '@material-ui/icons/Payment';
import PropTypes from 'prop-types';

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
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const PaymentTab = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box style={{ width: '100%' }}>
      <Box>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
          <Tab icon={<PaymentIcon />} {...a11yProps(0)} />
          <Tab icon={<PaymentIcon />} {...a11yProps(1)} />
          <Tab icon={<PaymentIcon />} {...a11yProps(2)} />
          <Tab icon={<PaymentIcon />} {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel className="tab-panel" value={value} index={0}>

        <Typography color="text.secondary" component="div" variant="subtitle2" >
          $50 monthey fee
        </Typography>

        <Button variant="contained" color="secondary" className="payment-btn">Paypal</Button>

        <Typography component="div" color="text.secondary" variant="subtitle2">
          additional $20 cost per click per
        </Typography>

      </TabPanel>

      <TabPanel className="tab-panel" value={value} index={1}>

        <Typography color="text.secondary" component="div" variant="subtitle2" >
          $50 monthey fee
        </Typography>

        <Button variant="contained" color="secondary" className="payment-btn">Stripe</Button>

        <Typography component="div" color="text.secondary" variant="subtitle2" >
          additional $20 cost per click per
        </Typography>

      </TabPanel>

      <TabPanel className="tab-panel" value={value} index={2}>
        <CardPayment/>
      </TabPanel>

      <TabPanel className="tab-panel" value={value} index={3}>
        Item Four
      </TabPanel>
    </Box>
  );
};

export default PaymentTab;