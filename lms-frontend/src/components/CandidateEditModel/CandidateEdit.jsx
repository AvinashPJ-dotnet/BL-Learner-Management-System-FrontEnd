import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useEffect } from 'react';

export default function CandidateEdit(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  useEffect=()=>{
    setAnchorEl(props.event);
  }
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      {/* <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        Open Popover
      </Button> */}
      <Popover
        id={id}
        open={props.open}
        anchorEl={anchorEl}
        onClose={props.close}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </Popover>
    </div>
  );
}
