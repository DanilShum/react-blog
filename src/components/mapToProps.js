import { bindActionCreators } from "redux";
import { updatePost,updateUsers,updateComments } from "../store/actions";

export const mapStateToProps = (state) => {
  return {
    dataPost: state.dataPost,
    dataUser: state.dataUser,
    dataComment: state.dataComment
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    updatePost: bindActionCreators(updatePost, dispatch),
    updateUsers: bindActionCreators(updateUsers, dispatch),
    updateComments:bindActionCreators(updateComments, dispatch),
  };
};
