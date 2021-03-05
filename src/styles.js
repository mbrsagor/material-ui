import { makeStyles } from '@material-ui/core/styles';


const useStyle = makeStyles((theme) =>({
    container:{
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6)
    },
    cusomGrid: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }
}))


export default useStyle;