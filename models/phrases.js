module.exports = function(sequelize, DataTypes) {
    const Phrase = sequelize.define("phrase", {
      catagory: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [250]
        }
      },
      english: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [250]
        }
      },
      spanish: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [250]
        }
      }
    }, {
      timestamps: false
    });
    return Phrase;
  };