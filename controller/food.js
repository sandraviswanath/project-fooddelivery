
const food = require("../model/foodSchema");

const Createfood = async (req, res) => {
    const {
        email,
        name,
        phone,
        address,
        time,
        location,
        title,
        cover,
        place,
        rating,
        subtitle,
        fooditems: [foodname, foodimage, price, itemrating]
    } = req.body

    const fooddetails = await food.create({
        email,
        name,
        phone,
        address,
        time,
        location,
        title,
        cover,
        place,
        subtitle,
        fooditems: [foodname, foodimage, price, itemrating]
    });

    res.json(fooddetails);
};



const getfood=async(req,res)=>{
    const foodList = await food.find()
    res.json(foodList)
}

const updatefood = async (req, res) => {
    try {
        const _id = req.params.id;
        const {
            email,
            name,
            phone,
            address,
            time,
            location,
            title,
            cover,
            place,
            rating,
            subtitle,
            fooditems: [foodname, foodimage, price, itemrating]
        } = req.body
        const updatedItem = await food.findByIdAndUpdate(_id, {email,
            name,
            phone,
            address,
            time,
            location,
            title,
            cover,
            place,
            rating,
            subtitle,
            fooditems: [foodname, foodimage, price, itemrating]});
        if (!updatedItem) {
            return res.status(404).send('Item not found');
        }
        res.status(200).send(updatedItem);
    } catch (error) {
        console.error('Error updating item :', error);
        res.status(500).send('Internal Server Error');
    }
};

const deletefood = async (req, res) => {
    const id = req.params.id;
    try {
        
        const deletedItem = await food.findByIdAndDelete(id);
        if (!deletedItem) {
            return res.status(404).json({message:'Item not found'});
        }
        res.json({message:'Item removed'});
    } catch (error) {
        console.error('Error removing item:', error);
        res.status(500).json({message: error.message});
    }
};


const searchfood = async (req, res) => {
    try {
        const query = req.query.q; // Get the search query from the request URL query parameter
        const results = await food.find({ $text: { $search: query } }); // Perform a text search using MongoDB's text index
        res.json(results);
    } catch (error) {
        console.error('Error searching for food:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports={getfood,Createfood,deletefood,updatefood,searchfood}
