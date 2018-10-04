class Event < ApplicationRecord
    belongs_to :neighborhood


    def self.current_events
        self.where('end_date > ?  AND start_date < ?', Time.now, Time.now)
    end

    def self.upcoming_events
        self.where('start_date > ?', Time.now)
    end

    def self.past_events
        self.where('end_date < ?', Time.now)
    end

end 