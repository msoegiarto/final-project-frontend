import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import CloudDownloadOutlinedIcon from '@material-ui/icons/CloudDownloadOutlined';
import DeleteDialog from './DeleteDialog';
import languages from '../lang_config.json';


const styles = theme => ({
  card: {
    minWidth: 275,
    margin: theme.spacing(1),
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: '#fafafa',
    justifyContent: 'flex-end',
  },
  filename: {
    display: 'flex',
    minWidth: '100%'
  },
  details: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  content: {
    minWidth: 250,
    flex: '1 0 auto',
  },
  text: {
    textAlign: 'left',
    padding: '1rem 0',
    color: '#01579b'
  },
  deleteBtn: {
    margin: theme.spacing(1),
    color: '#ff3d00',
    width: '100%',
  },
  downloadBtn: {
    margin: theme.spacing(1),
    color: '#11cb5f',
    width: '100%',
  }
});

class TranslatedFile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fromLanguage: null,
      toLanguage: null,
      openDeleteDialog: false
    }
  }

  componentDidMount = () => {
    const fromLanguage = languages.find(element => element.key === this.props.file.fromLanguage).value || '';
    const toLanguage = languages.find(element => element.key === this.props.file.toLanguage).value || '';

    this.setState({ fromLanguage, toLanguage });
  }

  onClickDelete = () => {
    this.toggleDeleteDialog();
    this.props.onClickDelete(this.props.file.id);
  }

  onClickDownload = () => {
    this.props.onClickDownload(this.props.file.id);
  }

  toggleDeleteDialog = () => {
    this.setState(prevState => ({
      openDeleteDialog: !prevState.openDeleteDialog
    }));
  }

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card} >
        <div className={classes.filename}>
          <CardContent className={classes.content}>
            <Typography variant="h5" component="h5" className={classes.text}>{this.props.file.name}</Typography>
          </CardContent>
        </div>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography variant="h5" component="h5" className={classes.text}>{this.state.fromLanguage} - {this.state.toLanguage}</Typography>
          </CardContent>
        </div>
        <div className={classes.details}>
          <CardActions>
            <Button
              variant="outlined"
              size="medium"
              className={classes.deleteBtn}
              startIcon={<DeleteOutlinedIcon color="inherit" />}
              onClick={this.toggleDeleteDialog}
              disabled={this.props.isDisabled}>
              Delete
              </Button>
            <DeleteDialog
              openDeleteDialog={this.state.openDeleteDialog}
              toggleDeleteDialog={this.toggleDeleteDialog}
              onClickDelete={this.onClickDelete} />
          </CardActions>
        </div>
        <div className={classes.details}>
          <CardActions>
            <Button
              variant="outlined"
              size="medium"
              className={classes.downloadBtn}
              startIcon={<CloudDownloadOutlinedIcon color="inherit" />}
              onClick={this.onClickDownload}
              disabled={this.props.isDisabled}>
              Download
              </Button>
          </CardActions>
        </div>
      </Card >

    );
  }
}

TranslatedFile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(TranslatedFile);