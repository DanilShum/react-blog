import { bindActionCreators } from "redux";
import { updatePost,updateUsers } from "../store/actions";

export const mapStateToProps = (state) => {
  return {
    dataPost: state.dataPost,
    dataUser: state.dataUser
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    updatePost: bindActionCreators(updatePost, dispatch),
    updateUsers: bindActionCreators(updateUsers, dispatch),
  };
};
