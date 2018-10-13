class EventsController < ApiController
  before_action :set_event, only: [:show, :update, :destroy]

  # GET /events
  def index
    @events = Event.all

    render json: @events
  end
  

  # GET /events/1

  def show
    render json: set_event
    
  end
  
  # POST /events
  def create
    # @event = Event.new
    # binding.pry
    # @event.avatar.attach(io: File.open('/Users/Vane/Desktop/NYC-PopUps/puzzle.jpg'), filename: "puzzle.jpg")
    # binding.pry
    # hood = Neighborhood.find(params.id)
    # @event.neighborhood = hood
    @event.imageUrl = url_for(@event.avatar)
    @event = Event.create(event_params)
    @event.save
    if @event.save
      render json: @event, status: :created, location: @event
    else
      render json: @event.errors, status: :unprocessable_entity
    end
  end
  
    
  # PATCH/PUT /events/1
  def update
    if @event.update(event_params)
      @event.imageUrl = url_for(@event.avatar)
      @event.save
      render json: @event
    else
      render json: @event.errors, status: :unprocessable_entity
    end
  end 

  # DELETE /events/1
  def destroy
    # binding.pry
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
