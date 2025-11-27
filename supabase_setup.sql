-- Create the home_food_ideas table
CREATE TABLE IF NOT EXISTS home_food_ideas (
    id BIGSERIAL PRIMARY KEY,
    meal_type TEXT NOT NULL CHECK (meal_type IN ('breakfast', 'lunch', 'dinner')),
    idea_text TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    author TEXT DEFAULT 'Anonymous Cook'
);

-- Create an index on meal_type for faster queries
CREATE INDEX IF NOT EXISTS idx_meal_type ON home_food_ideas(meal_type);

-- Create an index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_created_at ON home_food_ideas(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE home_food_ideas ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to read ideas
CREATE POLICY "Anyone can read ideas"
    ON home_food_ideas
    FOR SELECT
    USING (true);

-- Create policy to allow anyone to insert ideas (anonymous posting)
CREATE POLICY "Anyone can insert ideas"
    ON home_food_ideas
    FOR INSERT
    WITH CHECK (true);

-- Optional: Create policy to allow deletion (for moderation)
-- You can delete this if you don't want deletion capability
CREATE POLICY "Anyone can delete ideas"
    ON home_food_ideas
    FOR DELETE
    USING (true);

-- Insert sample ideas to get started
INSERT INTO home_food_ideas (meal_type, idea_text, created_at) VALUES
    ('breakfast', 'Masala dosa with coconut chutney - crispy, filling, and the whole family loves it!', NOW()),
    ('breakfast', 'Simple paratha with curd and pickle - when you''re running late but need something substantial', NOW() - INTERVAL '1 day'),
    ('lunch', 'Dal tadka with jeera rice - comfort food that never disappoints', NOW()),
    ('lunch', 'Chole with rice and onion salad - protein-packed and delicious!', NOW() - INTERVAL '2 days'),
    ('dinner', 'Palak paneer with roti - healthy, tasty, and kids actually eat their greens!', NOW()),
    ('dinner', 'Egg curry with rice - quick to make, budget-friendly, and everyone asks for seconds', NOW() - INTERVAL '3 days');
