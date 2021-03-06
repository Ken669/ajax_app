class PostsController < ApplicationController
  def index
    @posts = Post.all.order(id: 'DESC')
    @post = Post.new
  end

  def create
    render json: {
      post: Post.create(post_params)
    }
    # redirect_to '/'
  end

  def checked
    post = Post.find(params[:id])

    if post.checked then
      post.update(checked: false)
    else
      post.update(checked: true)
    end
    # checkedカラムの値を反転

    item = Post.find(params[:id])
    render json: {post: item}
    # クリックした投稿のレコード情報をJson形式でレスポンス
  end

  private
  def post_params
    # params.require(:post).permit(:memo).merge(checked: false)
    params.permit(:memo).merge(checked: false)
  end
end
