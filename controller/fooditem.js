

const fooditem = require("../model/fooditemSchema");


const Createfooditems = async (req, res) => {
    console.log(req.body);
    const {
        email,
        fooditems: [foodname, foodimage, price, itemrating]
    } = req.body

    const fooddetails = await fooditem.create({
        email,
        fooditems: [foodname, foodimage, price, itemrating]
    });

    res.json(fooddetails);
};

const getfooditems=async(req,res)=>{
    const fooditemList = await fooditem.find()
    res.json(fooditemList)
};
const updatefooditems = async (req, res) => {
    try {
        const { userId, foodItemId } = req.params;
        const { foodname, foodimage, price, itemrating } = req.body;

        // Construct the update object
        const updateData = {
            $set: {
                'fooditems.$.foodname': foodname,
                'fooditems.$.foodimage': foodimage,
                'fooditems.$.price': price,
                'fooditems.$.itemrating': itemrating
            }
        };

        // Update the food item
        const updatedItem = await fooditem.findOneAndUpdate(
            { _id: userId, 'fooditems._id': foodItemId },
            updateData,
            { new: true }
        );

        if (!updatedItem) {
            return res.status(404).json({ message: 'Food item not found' });
        }

        res.json({ message: 'Food item updated successfully', updatedItem });
    } catch (error) {
        console.error('Error updating food item:', error);
        res.status(500).json({ message: error.message });
    }
};

    



const deletefooditems = async (req, res) => {
    try {
        const { userId, foodItemId } = req.params;
        // Use userId and foodItemId to find and delete the specific food item
        const deletedItem = await fooditem.updateOne(
            { _id: userId },
            { $pull: { fooditems: { _id: foodItemId } } },
            { new: true }
        );
        if (!deletedItem) {
            return res.status(404).json({ message: 'Food item not found' });
        }
        res.json({ message: 'Food item removed successfully' });
    } catch (error) {
        console.error('Error removing food item:', error);
        res.status(500).json({ message: error.message });
    }
};


module.exports={getfooditems,Createfooditems,deletefooditems,updatefooditems}

