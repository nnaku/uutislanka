import React, { useState, useEffect } from 'react';
import {
  Typography,
  Grid,
  Chip,
  TextField,
  Switch,
  FormControlLabel,
  FormControl,
  RadioGroup,
  Radio,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  chip: {
    margin: theme.spacing.unit,
  },
}));

function Root({ theme, setCategory }) {
  const classes = useStyles();
  const [defaults, setDefaults] = useState(
    JSON.parse(localStorage.getItem('/')) || []
  );
  const [newDefault, setNewDefault] = useState('');
  const [openTo, setOpenTo] = useState(localStorage.getItem('openTo') || 'tab');
  const [ignore, setIgnore] = useState(
    JSON.parse(localStorage.getItem('ignore')) || []
  );
  const [newIgnore, setNewIgnore] = useState('');

  useEffect(() => {
    setCategory('Asetukset');
  }, []);

  useEffect(() => {
    localStorage.setItem('/', JSON.stringify(defaults));
  }, [defaults]);

  useEffect(() => {
    localStorage.setItem('ignore', JSON.stringify(ignore));
  }, [ignore]);

  function makeAddHandler({ target, type }) {
    let { value, name } = target;
    if (value.endsWith(',') || (type === 'blur' && value)) {
      if (name === 'defaults') {
        setDefaults([...defaults, value.replace(',', '').toLowerCase()]);
        setNewDefault('');
      } else {
        setIgnore([...ignore, value.replace(',', '').toLowerCase()]);
        setNewIgnore('');
      }

      setNewDefault('');
    } else {
      if (name === 'defaults') {
        setNewDefault(value);
      } else {
        setNewIgnore(value);
      }
    }
  }

  function makeDefDelHandler(element) {
    return function() {
      setDefaults(defaults.filter(e => e !== element));
    };
  }

  function makeIgnDelHandler(element) {
    return function() {
      setIgnore(ignore.filter(e => e !== element));
    };
  }

  function handleOpenTo(e) {
    e.persist();
    setOpenTo(e.target.value);
    localStorage.setItem('openTo', e.target.value);
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h6">Avaa linkit</Typography>
        <FormControl component="fieldset" className={classes.formControl}>
          <RadioGroup
            aria-label="open link"
            name="openTo"
            value={openTo}
            onChange={handleOpenTo}
          >
            <Grid container>
              <Grid item>
                <FormControlLabel
                  value="tab"
                  control={<Radio />}
                  label="Uudessa välilehdessä/ikkunassa"
                />
              </Grid>
              <Grid item>
                <FormControlLabel
                  value="dialog"
                  control={<Radio />}
                  label="Dialogissa"
                />
              </Grid>
            </Grid>
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">Ulkoasu</Typography>
        <FormControlLabel
          control={
            <Switch
              checked={theme.isDarkTheme}
              onChange={theme.toggleTheme}
              value="isDarkTheme"
            />
          }
          label="Tumma teema"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="h6">Oma feedi</Typography>
        <Typography>
          Kokoa oma "Tuoremmat" lista, vain valitsemistasi kategorioista!
        </Typography>
        <TextField
          fullWidth
          label="Lisää kategoria"
          placeholder=""
          name="defaults"
          className={classes.textField}
          value={newDefault}
          onChange={makeAddHandler}
          onBlur={makeAddHandler}
          helperText={'Erottele pilkulla'}
        />
        <div>
          {defaults.map(item => (
            <Chip
              key={item}
              label={item}
              name=""
              onDelete={makeDefDelHandler(item)}
              className={classes.chip}
              color="primary"
            />
          ))}
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="h6">Suodatin</Typography>
        <Typography>
          Piilota valittujen kategorioiden uutiset kaikista listoista!
        </Typography>
        <TextField
          fullWidth
          label="Piilota kategoria"
          placeholder="Erottele pilkulla"
          name="Piilota kategoria"
          className={classes.textField}
          value={newIgnore}
          onChange={makeAddHandler}
          onBlur={makeAddHandler}
          helperText={'Erottele pilkulla'}
        />
        <div>
          {ignore.map(item => (
            <Chip
              key={item}
              label={item}
              onDelete={makeIgnDelHandler(item)}
              className={classes.chip}
              color="primary"
            />
          ))}
        </div>
      </Grid>
    </Grid>
  );
}

export default Root;
