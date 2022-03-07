import React, { useState } from 'react';

import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';

import { FILTER_NAMES } from '../../utils/constants';

import './filter-styles.scss';

function Filter(props) {
  const [personName, setPersonName] = useState([]);

  const handleChange = event => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === 'string' ? value.split(',') : value);
  };

  const filterNames = name => (
    <MenuItem key={name} value={name}>
      <Checkbox checked={personName.indexOf(name) > -1} />
      <ListItemText primary={name} />
    </MenuItem>
  );

  return (
    <FormControl className="form-container" sx={{ m: 1 }}>
      <InputLabel className="label-text">{props.labelName}</InputLabel>
      <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple
        value={personName}
        onChange={handleChange}
        input={<OutlinedInput label={props.labelName} />}
        renderValue={selected => selected.join(', ')}
        className="select-box">
        {FILTER_NAMES.map(filterNames)}
      </Select>
    </FormControl>
  );
}
export default Filter;
