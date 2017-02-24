/**
 * Created by forli on 2017/2/23.
 */
var Comment = React.createClass({
    render:function(){
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                    {this.props.text}
                </h2>
            </div>);
    }
});