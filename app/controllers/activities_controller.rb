class ActivitiesController < ApplicationController




	def index
		render json: Activity.all
	end

	def create
		@activity = Activity.create(activity_params)
		# respond_to do |format|
		# 	format.html { redirect_to mutant_path(@mutant) }
		# 	format.json { render json: @mutant }
		# end
		render json: @activity
	end




	def show
		render json: Activity.find(params[:id])
	end


	private

	def activity_params
		params.require(:activity).permit(:title, :time, :content, :level, :location, :id)
	end

end
