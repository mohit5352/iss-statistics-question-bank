/**
 * ISS Statistics Question Bank - Answer Keys
 * 
 * Format: QUESTION_ANSWERS[paper][section][year][questionNumber] = "correct_option"
 * Options are: "a", "b", "c", "d"
 */

const QUESTION_ANSWERS = {
    // Paper 1
    "paper1": {
        // Probability & Statistics
        "prob": {
            "2017": {},
            "2018": {},
            "2019": {},
            "2020": {},
            "2021": {},
            "2022": {},
            "2023": {},
            "2024": {},
            "2025": {
                "1": "a",  // Beta distribution mode
                "2": "c",  // Properties of Beta Distribution
                "3": "b",  // Transformation of Random Variables
                "4": "d",  // Mathematical Expectation
                "5": "b",  // Conditional Expectation
                "6": "b",  // Laplace Distribution
                "7": "c",  // Expectation of Beta Variate
                "8": "c",  // Moment Generating Functions
                "9": "b",  // Bivariate Distributions - Marginal PDF
                "10": "c", // Asymptotic Properties of Chi-square Distribution
                "11": "b", // Probability & Contingency Tables
                "12": "d", // Moments and Cumulants
                "13": "c", // Bivariate Normal Distribution
                "14": "d", // Partial Correlation
                "15": "c", // Correlation Ratio Properties
                "16": "d", // Joint Probability Mass Function
                "17": "b", // Order Statistics of Geometric Distribution
                "18": "a", // Marginal Distributions of Bivariate Normal
                "19": "c", // Testing Significance of Correlation Coefficient
                "20": "b", // Theory of Attributes - Association
                "41": "b", // Multinomial Distribution
                "42": "b", // Correlation in Multinomial
                "43": "c", // Conditional Expectation
                "44": "d", // Conditional Variance
                "45": "c", // Compound Poisson Distribution
                "46": "b", // Variance of Compound Random Variables
                "47": "d", // MGF of Compound Distributions
                "48": "a", // Poisson Approximation
                "49": "b", // Convergence in Probability
                "50": "d", // Characteristic Functions
                "51": "b", // Empirical Distribution Function
                "52": "a", // Transformation of Variables
                "53": "c", // Theory of Attributes
                "54": "b", // Uniform Distribution Properties
                "55": "b", // Normal Distribution Probability
                "56": "b", // Distribution of Quadratic Forms
                "57": "c", // Distribution of Order Statistics
                "58": "a", // Normal Distribution Probabilities
                "59": "a", // Sampling Distributions (t-dist)
                "60": "d"  // Yule's Coefficient of Association
            }
        },
        // Numerical Analysis
        "num": {
            "2017": {},
            "2018": {},
            "2019": {},
            "2020": {},
            "2021": {},
            "2022": {},
            "2023": {},
            "2024": {},
            "2025": {}
        },
        // Computer Section
        "comp": {
            "2017": {},
            "2018": {},
            "2019": {},
            "2020": {},
            "2021": {},
            "2022": {},
            "2023": {},
            "2024": {},
            "2025": {}
        }
    },
    // Paper 2
    "paper2": {
        // Linear Models
        "linear": {
            "2025": {
                "51": "a", // Design of Experiments
                "52": "c", // Hypothesis Testing
                "53": "b", // Design Matrix
                "54": "c", // Random Effects Model
                "55": "c", // Matrix Algebra
                "56": "d", // ANOVA Table
                "57": "b", // Linear Models
                "58": "b", // Generalized Linear Model
                "59": "c", // Least Squares
                "60": "c", // Least Squares Estimators
                "61": "b", // BLUE of θ1
                "62": "a", // BLUE of θ2
                "63": "b", // BLUE of β
                "64": "a", // Variance of Estimator
                "65": "a"  // Estimability
            }
        },
        // Statistical Inference and Hypothesis Testing
        "inference": {
            "2025": {}
        },
        // Official Statistics
        "official": {
            "2025": {}
        }
    }
};

// Export for use in other scripts (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = QUESTION_ANSWERS;
}

