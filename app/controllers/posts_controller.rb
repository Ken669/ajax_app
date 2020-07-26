class PostsController < ApplicationController
  def index
    @posts = Post.all.order(id: 'DESC')
    @post = Post.new
  end

  def create
    Post.create(post_params)
    redirect_to '/'
  end

  private
  def post_params
    params.require(:post).permit(:memo)
  end
end
