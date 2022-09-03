// import React from "react";
// import { makeStyles, withStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import LinearProgress from "@material-ui/core/LinearProgress";

// const BorderLinearProgress = withStyles((theme) => {
//   return {
//     root: {
//       borderRadius: 5,
//       width: 50,
//       height: "100%",
      
//     },
//     colorPrimary: {
//       backgroundColor: '#222227'
//     },
//     bar: {
//       borderRadius: 5,
//       transform: 'translateY(90%) !important',
//       background: `linear-gradient(90deg, #9F6CCB 0%, #DA7767 100%);`,
//     }
//   };
// })(LinearProgress);

// // Inspired by the former Facebook spinners.

// const useStyles = makeStyles({
//   root: {
//     flexGrow: 1,
//     height: 300,
//     gap: 10,
//     display: "flex",
//     padding: 10,
//     backgroundColor:'#2C2C32'
//   },
//   stats: {
//     display: "flex",
//     alignItems: "center",
//     flexDirection: "column",
//   }
// });

// const BarChart = ({percentage}) => {
//   const classes = useStyles();

//   return (
//     <Card className={classes.root}>
     
//       <div className={classes.stats}>
//         <BorderLinearProgress variant="determinate" value={50} />
//         <div>{percentage}%</div>
//       </div>
//     </Card>
//   );
// }

// export default  BarChart


import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Typography } from "@mui/material";

const BorderLinearProgress = withStyles((theme) => {
  return {
    root: {
      borderRadius: 5,
      width: 50,
      height: "100%"
    },
    colorPrimary: {
        backgroundColor: '#222227'
    },
    bar: {
      borderRadius: 5,
      transform: ({ value }) => {
        return `translateY(${value}%) !important`;
      },
      backgroundColor: "#DA7767"
    }
  };
})(LinearProgress);

// Inspired by the former Facebook spinners.

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    height: 400,
    gap: 10,
    display: "flex",
    padding: 10,
    backgroundColor:'#2C2C32',
    boxShadow:'none'
  },
  stats: {
    display: "flex",
    alignItems: "center",
    justifyContent:'center',
    flexDirection: "column",
    color:'#ffffff',
    fontWeight:600
  }
});

export default function CustomizedProgressBars({percentage}) {
  const classes = useStyles();

  return (
    <Card className={classes.root} alignItems={'center'} justifyContent={'center'}>
     
      <div className={classes.stats}>
        <BorderLinearProgress variant="determinate" value={(100-percentage)} />
        <Typography variant="h6" textAlign={'center'}>{percentage}% </Typography>
      </div>
    </Card>
  );
}
