class PostsController < ApplicationController
  def index
    @posts = Post.all.order(id: 'DESC')
    @post = Post.new
  end

  def create
    Post.create(post_params)
    redirect_to '/'
  end

  def checked
    post = Post.find(params[:id])
    if post.checked then
      post.update(checked: false)
    else
      post.update(checked: true)
    end

    item = Post.find(params[:id])
    render json: {post: item}
  end

  private
  def post_params
    params.require(:post).permit(:memo)
  end
end
