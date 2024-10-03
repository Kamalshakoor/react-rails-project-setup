class PostsController < ApplicationController
  def index
    @posts = Post.all
    if @posts
      render json: @posts
    else
      render json: @posts.errors
    end
  end

end
