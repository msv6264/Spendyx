import Expense from "../models/expense.model.js";

export async function getAllExpenses(req, res) {
  try {
    const expenses = await Expense.find({
      user: req.user.id,
    });

    res.status(200).json(expenses);
  } catch (error) {
    console.error("Error fetching expenses", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function createExpense(req, res) {
  try {
    const { date, item, price, category } = req.body;

    const newExpense = new Expense({
      date,
      item,
      price,
      category,
      user: req.user.id,
    });

    await newExpense.save();

    res.status(201).json(newExpense);
  } catch (error) {
    res.status(500).json({ message: "Error creating expense" });
  }
}

export async function updateExpenseById(req, res) {
  try {
    const id = req.params.id;
    const updates = req.body;

    const updatedExpense = Expense.findOneAndUpdate(
      { _id: id, user: req.user.id },
      updates,
      { new: true },
    );

    if (!updatedExpense) {
      return res.status(404).json({ message: "Expense not found" });
    }

    res.status(201).json(updatedExpense);

  } catch (error) {
    res.status(500).json({ message: "Error updating expense" });
  }
}

export async function deleteExpenseById(req, res) {
  try {
    const id = req.params.id;
    
    const deletedExpense = await Expense.findByIdAndDelete({
      _id: id,
      user: req.user.id
    });

    if(!deletedExpense){
      return res.status(404).json({ message: "Expense not found" });
    }

    res.json({ message: "Expense deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: "Error deleting expense" });
  }
}
