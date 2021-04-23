// delete refresh token
const logout = async (req, res) => {
  const { refreshToken } = req.body;

  try {
    await prisma.token.delete({
      where: { id: refreshToken },
    });

    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  } finally {
    await prisma.$disconnect();
  }
};

export default authenticateToken(logout);
