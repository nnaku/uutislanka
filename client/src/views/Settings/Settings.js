import React, { Fragment, useState, useEffect } from 'react';
import { Typography, Grid, Chip, TextField, Switch, FormControlLabel } from '@material-ui/core';

function Root({ classes, theme, setCategory  }) {
  const [defaults, setDefaults] = useState(JSON.parse(localStorage.getItem('/')) || [])
  const [newDefault, setNewDefault] = useState('')
  const [ignore, setIgnore] = useState(JSON.parse(localStorage.getItem('ignore')) || [])
  const [newIgnore, setNewIgnore] = useState('')
  
  useEffect(()=>{
    setCategory('Asetukset')
  },[])

  useEffect(() => {
    localStorage.setItem('/', JSON.stringify(defaults))
  }, [defaults])

  useEffect(() => {
    localStorage.setItem('ignore', JSON.stringify(ignore))
  }, [ignore])

  function makeAddHandler({ target, type }) {
    let { value, name } = target
    if (value.endsWith(",") || (type === "blur" && value)) {
      if (name === 'defaults') {
        setDefaults([...defaults, value.replace(",", "").toLowerCase()])
        setNewDefault('')
      } else {
        setIgnore([...ignore, value.replace(",", "").toLowerCase()])
        setNewIgnore('')
      }

      setNewDefault('')
    } else {
      if (name === 'defaults') {
        setNewDefault(value)
      } else {
        setNewIgnore(value)
      }

    }
  }

  function makeDefDelHandler(element) {
    return function () {
      setDefaults(defaults.filter(e => e !== element))
    }
  }

  function makeIgnDelHandler(element) {
    return function () {
      setIgnore(ignore.filter(e => e !== element))
    }
  }

  return (
    <Fragment>
      <Grid container spacing={32}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6">Oma feedi</Typography>
          <div>
            {defaults.map(item => <Chip
              key={item}
              label={item}
              name=""
              onDelete={makeDefDelHandler(item)}
              className={classes.chip}
              color="primary"
            />)}
          </div>

          <TextField
          fullWidth
            label="Lisää kategoria"
            placeholder="Erottele pilkulla"
            name="defaults"
            className={classes.textField}
            value={newDefault}
            onChange={makeAddHandler}
            onBlur={makeAddHandler}
            helperText={'Koosata oma "Tuoremmat" lista vain valituista kategorioista!'}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6">Suodatin</Typography>
          <div>
            {ignore.map(item => <Chip
              key={item}
              label={item}
              onDelete={makeIgnDelHandler(item)}
              className={classes.chip}
              color="primary"
            />)}
          </div>

          <TextField
          fullWidth
            label="Piilota kategoria"
            placeholder="Erottele pilkulla"
            name="Piilota kategoria"
            className={classes.textField}
            value={newIgnore}
            onChange={makeAddHandler}
            onBlur={makeAddHandler}
            helperText={'Piilota valittujen kategorioiden uutiset kaikista listoista!'}
          />
        </Grid>
        <Grid item xs={12}>
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
      </Grid>
    </Fragment>
  );
}

export default Root;
