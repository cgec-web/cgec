const aliveController = (req, res) => {
  return res.status(200).json({ sms: "Hey I'm alive" });
};

export { aliveController };
