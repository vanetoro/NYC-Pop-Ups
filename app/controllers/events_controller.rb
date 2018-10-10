class EventsController < ApiController
  before_action :set_event, only: [:show, :update, :destroy]

  # GET /events
  def index
    @events = Event.all

    render json: @events
  end
  
  def upcoming
    @events = Event.upcoming_events
    
    render json: @events
  end 
  def current
    @events = Event.current_events
    
    render json: @events
  end 

  def past

    @events = Event.past_events
    
    render json: @events
  end 


  # GET /events/1

  def show
    render json: @event
  end
  
  # POST /events
  def create
    @event = Event.new(event_params)
    binding.pry
    hood = Neighborhood.find(params.id)
    @event.neighborhood = hood
    @event.save
    # if @event.save
    #   render json: @event, status: :created, location: @event
    # else
    #   render json: @event.errors, status: :unprocessable_entity
    # end
  end
  
    
  # PATCH/PUT /events/1
  def update
    if @event.update(event_params)
      render json: @event
    else
      render json: @event.errors, status: :unprocessable_entity
    end
  end

  # DELETE /events/1
  def destroy
    @event.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_event
      @event = Event.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def event_params
      params.require(:event).permit(:address, :description, :start_date, :end_date, :price, :name, :neighborhood_id, :avatar)
    end
end
