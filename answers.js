/**
 * ISS Statistics Question Bank - Answer Keys
 * 
 * Format: QUESTION_ANSWERS[paper][section][year][questionNumber] = "correct_option"
 * Options are: "a", "b", "c", "d"
 * 
 * This file contains verified answer keys for UPSC ISS Statistics papers
 * sourced from official UPSC documents and authoritative references.
 */

const QUESTION_ANSWERS = {
    // Paper 1
    "paper1": {
        // Probability & Statistics
        "prob": {
            "2017": {
                "1": "d",  // Bayes' Theorem - Leela's examination problem
                "2": "b",  // Bernoulli Trials - Length of run
                "3": "b",  // Probability of Events - death causes
                "4": "a",  // Uniform Distribution - assertions
                "5": "a",  // Conditional Distribution - Poisson
                "6": "a",  // Probability of Combined Events
                "7": "b",  // Expected Value - Game Theory
                "8": "d",  // Exponential Distribution - bulbs
                "9": "a",  // Moments of PDF
                "10": "c", // Variance of Sum - Uniform
                "11": "c", // Normal Distribution - Sum of Variables
                "12": "d", // Bernoulli Trials - Drunkard's Walk
                "13": "a", // Poisson Distribution Properties
                "14": "b", // Distribution Function and PDF
                "15": "c", // Normal Distribution - Ratios and Sums
                "16": "a", // Probability - Successive Changes
                "17": "b", // Chebyshev's Inequality
                "18": "a", // Weak Law of Large Numbers
                "19": "a", // Variance of Difference
                "20": "d", // Order Statistics - Uniform Distribution
                "21": "b", // Frequency Distribution - Passing Marks
                "22": "b", // Semi-interquartile Range
                "23": "c", // Mode of frequency distribution
                "24": "b", // Standard Deviation - Discrete Observations
                "25": "b", // Correlation Coefficient Formula
                "26": "d", // Correction of Mean and Variance
                "27": "d", // F-distribution - Conditions
                "28": "b", // Order Statistics - Median Distribution
                "29": "d", // Distribution Relationships
                "30": "b", // Ratios in Continuous Distributions
                "31": "a", // Applications of F-distribution
                "32": "a", // Least Squares - Model Selection
                "33": "c", // Correlation Coefficient - Linear Combinations
                "34": "d", // Covariance and Regression
                "35": "a", // Sampling Distributions - t and F
                "36": "d", // Properties of F-distribution
                "37": "b", // Combined Variance
                "38": "d", // Chi-square Test Applications
                "39": "c", // Bivariate Normal Distribution
                "40": "b"  // Conditional Expectation - Bivariate Normal
            },
            "2018": {
                "1": "c",  // Probability of Union of Independent Events
                "2": "b",  // Negative Binomial / Sequential Sampling
                "3": "b",  // Conditional Probability - Continuous PDF
                "4": "c",  // Bayes' Theorem - Urns
                "5": "d",  // Bivariate Independence
                "6": "b",  // Existence of Moments
                "7": "a",  // Binomial Distribution - Mode and Skewness
                "8": "b",  // Transformation of Normal Variates
                "9": "b",  // Conditional Gamma Distribution
                "10": "d", // Exponential Distribution Properties
                "11": "b", // Uniform Distribution - Breaking a Rod
                "12": "d", // Joint Distribution - Probability Calculation
                "13": "a", // Joint Density - Probability of Inequality
                "14": "c", // Joint PDF - Expectation
                "15": "b", // Discrete Joint Distribution - Independence and Covariance
                "16": "a", // Transformation - Independence and Covariance
                "17": "d", // MGF of Linear Combination of Normals
                "18": "b", // PGF of Geometric-like Waiting Time
                "19": "c", // Chebyshev's Inequality
                "20": "a", // Beta Distribution of the First Kind
                "21": "c", // Measurement Scales and Data Types
                "22": "d", // Regression - Minimum Variance
                "23": "a", // Skewness and Standard Deviation
                "24": "b", // Yule's Coefficient of Association
                "25": "b", // Theory of Attributes
                "26": "a", // Regression Equation from Joint PDF
                "27": "d", // Bivariate Normal Distribution Properties
                "28": "b", // Properties of Correlation Coefficient
                "29": "a", // Multiple Correlation
                "30": "a", // Distribution of Correlation Coefficient
                "31": "a", // Partial Correlation
                "32": "d", // Correlation Coefficient - Linear Combinations
                "33": "b", // Large Sample Distribution - Uniform
                "34": "a", // Normal Distribution - Sample Mean Probability
                "35": "b", // T-distribution Construction
                "36": "c", // F-distribution - Expectations
                "37": "b", // Non-parametric Tests
                "38": "c", // Sampling Distributions - Relationships
                "39": "c", // Order Statistics - Expectation
                "40": "a"  // Order Statistics - Range
            },
            "2019": {
                "1": "d",  // Scales of Measurement & Data Representation
                "2": "d",  // Joint Discrete Distributions
                "3": "c",  // Coefficient of Variation
                "4": "b",  // Theory of Attributes
                "5": "a",  // Linear Regression Properties
                "6": "a",  // Regression Coefficients & Correlation
                "7": "b",  // Bivariate Normal Distribution
                "8": "d",  // Fisher's Z-Transformation
                "9": "c",  // Correlation Coefficient Analysis
                "10": "c", // Covariance & Correlation Relationships
                "11": "c", // Buffon's Needle Problem
                "12": "b", // Bayes' Theorem - Cannons
                "13": "b", // Probability - Recovery Rates
                "14": "d", // Discrete Random Variables - Expectation
                "15": "c", // Negative Binomial Distribution Context
                "16": "a", // Transformation of Poisson Variates
                "17": "a", // Geometric Distribution - Expectation
                "18": "d", // Binomial Distribution Properties
                "19": "c", // Correlation Coefficient - Transformation
                "20": "b", // Marginal Distributions
                "21": "c", // Statistical Measures & Distributions
                "22": "d", // Hypothesis Testing - Type I Error
                "23": "d", // Standard Error of Difference
                "24": "a", // Testing Equality of Proportions
                "25": "b", // Normal Distribution - Sampling Moments
                "26": "b", // Coefficient of Contingency
                "27": "b", // Chi-square Test Validity
                "28": "c", // Distribution of Functions of Random Variables
                "29": "a", // F-distribution Expectations
                "30": "b", // Order Statistics - Median Distribution
                "31": "d", // Transformation of Variables
                "32": "b", // Sampling without Replacement
                "33": "c", // Chebyshev's Inequality - Application
                "34": "b", // Chebyshev's Inequality - k-value
                "35": "c", // Central Limit Theorem - Error Analysis
                "36": "a", // Expectation of Order Statistics
                "37": "a", // Finding Constant in PDF
                "38": "d", // Normal Distribution - Mean and Variance
                "39": "d", // Expectation and Variance of Absolute Value
                "40": "c"  // Distribution of Difference - Exponential
            },
            "2020": {
                "1": "d",  // Non-Parametric Tests - Kolmogorov-Smirnov
                "2": "a",  // Descriptive Statistics - Contingency Tables
                "3": "c",  // Statistical Inference - Clinical Trials
                "4": "c",  // Probability Distributions - F Distribution
                "5": "b",  // Non-Parametric Tests - Runs Test
                "6": "a",  // Non-Parametric Inference
                "7": "b",  // Probability - Order Statistics
                "8": "d",  // Correlation and Regression - Partial Correlation
                "9": "d",  // Rank Correlation
                "10": "c", // Order Statistics - Median
                "11": "b", // Descriptive Statistics - Properties of Mean and SD
                "12": "a", // Theory of Attributes
                "13": "c", // Correlation and Regression
                "14": "a", // Correlation Coefficient
                "15": "b", // Bivariate Correlation
                "16": "d", // Trivariate Distribution - Partial/Multiple Correlation
                "17": "d", // Distribution of Functions of Random Variables
                "18": "b", // F-Distribution - Degrees of Freedom
                "19": "a", // Non-Parametric Tests - Sign Test
                "20": "c", // Probability - Uniform Distribution
                "21": "c", // Probability - Combinatorics & Sampling
                "22": "c", // Conditional Probability
                "23": "c", // Probability Mass Functions
                "24": "c", // Normal Distribution - Linear Combinations
                "25": "c", // Distribution Properties - Memoryless Property
                "26": "a", // Joint Density Functions
                "27": "b", // Expected Value - Continuous Distribution
                "28": "c", // Moment Generating Functions
                "29": "b", // Markov Inequality
                "30": "a", // Indicator Variables & Joint Probability
                "31": "b", // Bivariate Normal Distribution
                "32": "d", // Convergence of Random Variables
                "33": "b", // Distribution Functions
                "34": "b", // Exponential Distribution
                "35": "c", // Poisson Distribution - PGF
                "36": "c", // Distribution Functions
                "37": "a", // Joint Distribution Functions
                "38": "d", // Functions of Random Vectors - Transformation
                "39": "a", // Binomial Distribution - Expectation
                "40": "c"  // Bayes' Theorem
            },
            "2021": {
                "1": "d",  // Joint Probability Density Functions
                "2": "c",  // Covariance
                "3": "a",  // Line of Regression
                "4": "c",  // Conditional Expectation
                "5": "d",  // Conditional Variance
                "6": "d",  // Chebyshev's Inequality - Sample Size
                "7": "d",  // Borel-Cantelli Lemma
                "8": "b",  // Characteristic Functions
                "9": "a",  // De Moivre-Laplace Theorem
                "10": "c", // Consistency of Estimators
                "11": "b", // Order Statistics
                "12": "d", // Consistency of Attributes
                "13": "c", // Measures of Dispersion
                "14": "a", // Bivariate Normal Distribution Properties
                "15": "c", // Bivariate Normal - Expected Value
                "16": "d", // Joint Expectations
                "17": "c", // Orthogonal Polynomials
                "18": "a", // BVN - Variance
                "19": "c", // BVN - Constant k
                "20": "b", // BVN - Regression
                "21": "a", // Borel Zero-One Law
                "22": "b", // Conditional Probability
                "23": "c", // Chebyshev's Inequality Calculation
                "24": "d", // Poisson Approximation
                "25": "b", // Central Limit Theorem
                "26": "c", // Law of Large Numbers/CLT
                "27": "a", // Probability Integral Transform
                "28": "d", // Variance of Linear Combinations
                "29": "c", // Probability - Circular Arrangements
                "30": "d", // Binomial Distribution Parameters
                "31": "a", // Descriptive Statistics - Partition Values
                "32": "c", // Partial Correlation
                "33": "a", // Chi-square Distribution Properties
                "34": "a", // Correlation Significance Test
                "35": "b", // Mann-Whitney U Test Calculation
                "36": "c", // Mann-Whitney Variance
                "37": "a", // Asymptotic Efficiency
                "38": "c", // Mathematical Expectation
                "39": "c", // Mean Deviation Properties
                "40": "b"  // Runs Test for Randomness
            },
            "2022": {
                "1": "b",  // Binomial Distribution - Properties
                "2": "b",  // Covariance - Multinomial
                "3": "c",  // Convergence in Probability
                "4": "d",  // Multinomial Probability
                "5": "c",  // Poisson Distribution - Parameters
                "6": "c",  // Binomial Distribution - Moments
                "7": "d",  // Joint PMF - Probability
                "8": "b",  // Combinatorial Probability
                "9": "a",  // Conditional Expectation
                "10": "d", // Regression Equation
                "11": "a", // Correlation Coefficient
                "12": "c", // Sampling Distributions - Normal
                "13": "d", // Bivariate Normal - Expectation
                "14": "b", // Regression Estimation
                "15": "d", // Bivariate Normal - Product Moments
                "16": "a", // Multiple Correlation
                "17": "b", // Distributions - Transformation
                "18": "d", // Bivariate Normal - Properties
                "19": "b", // Distribution of Correlation
                "20": "a", // Multiple Correlation Properties
                "41": "c", // Strong Law of Large Numbers
                "42": "b", // Polya's Urn Scheme
                "43": "c", // Double Exponential Distribution
                "44": "d", // Bayes' Theorem
                "45": "a", // Limiting Distributions
                "46": "a", // Borel-Cantelli Lemma
                "47": "b", // Beta Distribution of Second Kind
                "48": "a", // Beta Distribution of First Kind
                "49": "b", // Joint Distributions
                "50": "c", // Probability Calculation
                "51": "d", // Measures of Central Tendency
                "52": "b", // Order Statistics
                "53": "b", // Non-parametric Tests
                "54": "b", // Normal Distribution Tests
                "55": "b", // Moments
                "56": "b", // Statistical Association
                "57": "b", // Non-parametric Methods
                "58": "b", // Chi-square Test
                "59": "a", // Confidence Intervals
                "60": "c"  // Distribution Transformations
            },
            "2023": {
                "1": "c",  // Bayes' Theorem
                "2": "b",  // Conditional Expectation
                "3": "b",  // Exponential Distribution Properties
                "4": "c",  // Binomial Distribution
                "5": "d",  // Log-Normal Distribution
                "6": "d",  // Uniform Distribution
                "7": "c",  // Bivariate Normal Distribution
                "8": "d",  // Joint Distributions - Expectation
                "9": "d",  // Joint Distributions - Variance
                "10": "d", // Joint Distributions - Covariance
                "11": "d", // Cumulants
                "12": "c", // Gamma Distribution
                "13": "c", // Probability Generating Functions
                "14": "c", // Mathematical Expectation
                "15": "a", // Conditional Distributions
                "16": "c", // Conditional Variance
                "17": "c", // Conditional Expectation
                "18": "a", // Joint Distributions - Normalizing Constant
                "19": "a", // Marginal Distributions
                "20": "d", // Marginal Distributions
                "21": "c", // Data Condensing
                "22": "b", // Variance of Linear Transformation
                "23": "d", // Binomial Distribution - Moments
                "24": "d", // Chi-Square Test for Association
                "25": "a", // Correlation and Variance
                "26": "c", // Bivariate Normal - Expectation
                "27": "d", // Bivariate Normal - Variance
                "28": "d", // Bivariate Normal - Correlation
                "29": "a", // Bivariate Normal - Conditional Distribution
                "30": "a", // Bivariate Normal - PDF
                "31": "b", // Bivariate Normal - Moments
                "32": "d", // Intra-class Correlation
                "33": "b", // Standard Error of Correlation
                "34": "a", // Confidence Intervals
                "35": "b", // Standard Error of Proportion
                "36": "a", // Sampling Distributions
                "37": "c", // Least Squares Estimation
                "38": "a", // Sampling Distributions
                "39": "a", // Bivariate Normal - Covariance
                "40": "a"  // Bivariate Normal - MGF
            },
            "2024": {
                "1": "a",  // Order Statistics
                "2": "a",  // Sampling Distributions
                "3": "c",  // Expectation of Sample Variance
                "4": "a",  // Expectation of Transformed Variables
                "5": "d",  // Variance of Transformed Variables
                "6": "c",  // MGF of Transformed Variables
                "7": "c",  // t-Distribution
                "8": "c",  // Expectation of Chi-square
                "9": "a",  // Expectation of Independent Ratios
                "10": "b", // Cauchy Distribution
                "11": "d", // Quadratic Forms
                "12": "b", // Bivariate Normal Distribution
                "13": "a", // Asymptotic Distributions
                "14": "c", // Sampling Distributions
                "15": "d", // Regression Analysis
                "16": "d", // Moment Generating Functions
                "17": "b", // Order Statistics
                "18": "c", // Variance Properties
                "19": "a", // Correlation & Variance
                "20": "d", // Order Statistics (Uniform)
                "21": "d", // Geometrical Probability
                "22": "d", // Continuous Distributions
                "23": "a", // Characteristic Functions
                "24": "a", // Characteristic Functions
                "25": "b", // Characteristic Functions
                "26": "c", // MGF Relationships
                "27": "d", // Random Walk / Stopping Time
                "28": "c", // Discrete Distribution
                "29": "b", // Successive Events Probability
                "30": "b", // Expected Value
                "31": "c", // Probability Laws
                "32": "d", // Joint Distributions
                "33": "d", // Joint PMF
                "34": "d", // PMF Properties
                "35": "b", // Marginal Distributions
                "36": "b", // Bivariate Normal Distribution
                "37": "d", // MGF and Joint Probabilities
                "38": "c", // Exponential Distribution Bounds
                "39": "c", // Transformations of Variates
                "40": "b"  // MGF and Parameters
            },
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
            "2017": {
                "41": "b", // Polynomial interpolation degree
                "42": "b", // Error analysis - Zero
                "43": "d", // Operators - Δ²/E x²
                "44": "b", // Newton-Raphson convergence - Quadratic
                "45": "a", // Trapezoidal rule degree 1
                "46": "b", // Divided differences - Arguments
                "47": "c", // First difference - 3x³ + x² + x + constant
                "48": "c", // Δ³[(1-x)(1-2x)(1-3x)] = 0
                "49": "d", // Central difference operator relation
                "50": "c", // Operator E ≡ e^{hD} - Analytical functions
                "51": "b", // Lagrange coefficients sum - 1
                "52": "b", // Simpson's 1/3 - Even intervals
                "53": "a", // Forward difference derivative formula
                "54": "a", // Divided difference f[x₀,x₁] for x²
                "55": "c", // Milne's method - Predictor-corrector
                "56": "a", // Newton-Raphson square root formula
                "57": "c", // Runge-Kutta 4th order error - h^4
                "58": "c", // Series summation - 509/3
                "59": "b", // nth difference of degree n polynomial - Constant
                "60": "d"  // Euler's method formula
            },
            "2018": {
                "41": "d", // Polynomial degree at least 5
                "42": "c", // Factorial polynomial - 2, 4, 6 and 0
                "43": "b", // nth divided difference - Constant
                "44": "d", // Runge-Kutta order 4 - y(h) = h/6[f(0)+4f(h/2)+f(h)]
                "45": "d", // Forward difference table hypothesis
                "46": "c", // Missing term α = 16
                "47": "c", // E^{3/2}(u₁₀) = 55.75
                "48": "c", // k value = 6
                "49": "a", // (E-2)²(x2ˣ) = 0 - Statement 1 only
                "50": "c", // Population interpolation - 2.1 < P₂₀₀₆ < 2.2
                "51": "c", // Lagrange interpolation α - 4 < α < 4.2
                "52": "d", // δ[f(x)g(x)] = μf(x)δg(x) + μg(x)δf(x)
                "53": "b", // Third divided difference of 1/x - -1/abcd
                "54": "b", // f(3) by Lagrange - 5.1
                "55": "d", // Central difference equivalent - 1, 2 and 3
                "56": "c", // Picard's method y(0.2) - 0.84
                "57": "c", // Milne's method - Both prediction and correction
                "58": "c", // Series summation - 509/3
                "59": "d", // Cubic polynomial f(4) = 33
                "60": "d"  // Euler's method - y_{n+1} = y_n + hf(x_n, y_n)
            },
            "2019": {
                "51": "c", // k = 62.05
                "52": "a", // Δ¹⁰[(1-ax)(1-bx²)(1-cx³)(1-dx⁴)] = 0
                "53": "d", // Δ⁵0³ and Δ³0⁵ = 0 and 96
                "54": "a", // Sum of second differences = -10
                "55": "d", // 1+x+x²+x³ = x³ + 4x² + 3x + 1
                "56": "b", // m₁ = -10 and m₂ = 21
                "57": "b", // Gauss forward - even below, odd on central
                "58": "a", // Third divided difference of 2x²+1 over 0,1,3,6 = 0
                "59": "b", // Slope at x=2 = -8
                "60": "c", // x for y=3000 - 16.93
                "71": "b", // Trapezoidal ln2 - 17/24
                "72": "a", // Simpson's 1/3 - Even number of subintervals
                "73": "c", // Simpson's 3/8 integral - 46
                "74": "d", // Euler's y(0.2) - 1.062
                "75": "b", // Picard's third approximation - 1 + x + x² + x³/6
                "76": "a", // Maximum at x=4.5
                "77": "a", // Linear interpolation f(1.04) - 0.309506
                "78": "a", // Runge-Kutta y(1.1) - 1.722
                "79": "d", // Operator expression = Δ + 1
                "80": "c"  // Third divided difference = 15
            },
            "2020": {
                "61": "c", // Newton's divided difference for new value
                "62": "a", // Trapezoidal for (1+x)dx
                "63": "b", // δ²y₅ = y₆ - 2y₅ + y₄
                "64": "c", // Euler y(0.5) - (0.2, 0.3)
                "65": "d", // All 3 statements correct
                "66": "b", // μδ = 1/2(Δ - ∇)
                "67": "a", // 1/(E²-9E+18)(12×5ˣ) = -6×5ˣ
                "68": "c", // (3x+8)⁽⁴⁾ at x=2 = 13440
                "69": "b", // x for f(x)=15 - 10
                "70": "b", // Function first difference - x³ + 2x² + 2x + c
                "71": "c", // Lowest degree polynomial - x³ - 9x² + 17x + 6
                "72": "b", // f(8) = 248
                "73": "c", // |A-B| for Simpson - (0, 5)
                "74": "b", // Statement 2 only
                "75": "c", // Δ - E ≠ I
                "76": "d", // Simpson's 1/3 integral = 26
                "77": "b", // Integration formula c = 3
                "78": "d", // Quadratic polynomial - 12x² - 19x + 8
                "79": "c", // Simpson's area = 7.74
                "80": "b"  // (Δ² + Δ - 6)y = 0
            },
            "2021": {
                "41": "c", // Newton's divided difference applicable for non-uniform
                "42": "a", // Runge-Kutta y(0.1) - 1.1103
                "43": "c", // Δ³y₂ = ∇³y₅
                "44": "b", // Lagrange degree 3
                "45": "b", // Simpson's 3/8 multiple of 3
                "46": "d", // All 3 statements correct
                "47": "b", // RK4 local error - ch⁵ + O(h⁶)
                "48": "c", // Interpolating polynomial - x² - x + 2
                "49": "d", // Second divided difference 1/x - 1/(abc)
                "50": "a", // Picard's second approximation - 0.8278
                "61": "c", // f[1,2,5] = 5
                "62": "d", // f(100) = 20
                "63": "a", // Simpson's 3/8 hypothesis only
                "64": "a", // Students 60-70 - 54
                "65": "c", // Both Lagrange and Newton formulas
                "66": "b", // f(3) approximation - 102
                "67": "a", // Δ(6x³+3x²+2x+1) = 18x²+24x+11
                "68": "c", // Euler's y₄ ≈ 0.009
                "69": "c", // f(3) by Newton = 10
                "70": "d"  // Δⁿx⁽ⁿ⁾ = n!hⁿ
            },
            "2022": {
                "21": "b", // Trapezoidal error - -1/150 f''(t)
                "22": "b", // Euler local error - h²/2
                "23": "d", // Operator expression - eˣ
                "24": "a", // Mixed quadrature I = 7.30
                "25": "b", // 1/(E-8)(x²2ˣ) = 2ˣ/54(9x²-6x-1)
                "26": "b", // Bessel p between 0.25 and 0.75
                "27": "b", // Inverse Lagrange x ≈ 1.98
                "28": "c", // Central difference f'' - (f_{i-1}-2f_i+f_{i+1})/h²
                "29": "a", // f(x₁,x₂,...,xₙ) for 1/x = (-1)ⁿ/(x₁x₂...xₙ)
                "30": "c", // Δⁿe^{ax+b} = e^{ax+b}(eᵃ-1)ⁿ
                "61": "d", // All 4 expressions correct
                "62": "d", // f(5) = 115
                "63": "b", // Δ²y₁₀ = 4
                "64": "a", // Δ - ∇ = Δ∇
                "65": "c", // f(x) = x³+5x²+4x+2
                "66": "d", // u = v = w
                "67": "c", // All 3 expressions correct
                "68": "c", // Both statements correct
                "69": "a", // Δ²a^{4x} = (a⁴-1)²a^{4x}
                "70": "a"  // Δ(1/x) at x=1 = -1/2
            },
            "2023": {
                "41": "c", // Third divided difference requires 4 arguments
                "42": "b", // Second divided difference Δ²x³ = x+y+z
                "43": "d", // U(2) = 16
                "44": "b", // Expression = h
                "45": "c", // Coefficient of x⁴ = -10
                "46": "b", // Linear interpolation error bound - second difference
                "47": "a", // Trapezoidal error ∫x³dx - h²/12
                "48": "d", // Quadrature b = 0
                "49": "d", // Δ⁶((1-x)(1-3x²)(1-4x³)) = -8640
                "50": "c", // Expression = y_{x+1}+y_{x-1}
                "51": "c", // u₂ = 3.3
                "52": "d", // u₈.₅ ≈ 68.75
                "53": "d", // No quadrature formula for unequal intervals
                "54": "d", // Trapezoidal or combination
                "55": "c", // Both statements 1 and 2 correct
                "56": "b", // Statement 2 only
                "57": "c", // Euler stable for -1 < λh < 1
                "58": "c", // RK4 result = 1-h+h²/2-h³/6+h⁴/24
                "59": "b", // Degree of f(x) = 3
                "60": "b"  // Constant term = 1
            },
            "2024": {
                "61": "a", // Picard y(3) = 3.0
                "62": "d", // I, II and III correct
                "63": "c", // Simpson error = 0.27
                "64": "d", // RK4 coefficients - 1/6, 2/3, 1/6
                "65": "d", // Trapezoidal ∫ = h/2(y₀+y₁+y₂)
                "66": "b", // Expression = Δy₀ + y₁ + y₂ + y₃
                "67": "d", // ∇⁵yₙ = Δ⁵yₙ₋₅
                "68": "c", // Simpson 1/3 and Weddle
                "69": "d", // f(2) = 2
                "70": "a", // Third divided difference - always constant
                "71": "a", // Δ²(abˣ) = abˣ implies a(b-1)²
                "72": "b", // α=6, β=0 for Δ²/E x³
                "73": "a", // a=1, n=-1/2
                "74": "d", // h = π/92
                "75": "b", // Roots - complex with real part zero
                "76": "b", // Newton error bound = ε
                "77": "a", // Quadrature α=h/3, β=4h/3, γ=h/3
                "78": "b", // II and III only - Simpson rules exact
                "79": "c", // Area = 260 sq m
                "80": "b"  // Largest h = (0, 1/4)
            },
            "2025": {
                "21": "a", // 1/(1-E²)(abˣ) = abˣ/(1-b²)
                "22": "d", // Δ⁵(1/x) at x=2 = -1/42
                "23": "a", // 10th divided difference = -α/(11h)
                "24": "c", // Trapezoidal value = 2
                "25": "b", // Simpson area = 0.6944
                "26": "b", // h = 3
                "27": "b", // I and IV only - Trapezoidal linear, Simpson quadratic
                "28": "b", // |y(0.2)-y₁| ≈ 0.0385
                "29": "c", // |y¹(x)-y(x)| at x=0.2 = 0.0015
                "30": "d", // Euler y(0.3) = 1.963
                "61": "a", // Function - x³ - x² + 4x + 2
                "62": "a", // Forward difference f''(x_i) = (f_{i+2}-2f_{i+1}+f_i)/h²
                "63": "c", // g(β) = b
                "64": "c", // g(13) = 71/20
                "65": "b", // y₄(1) = 2
                "66": "c", // I and III - Δ-∇=Δ∇ and Δ+∇=Δ/∇-∇/Δ
                "67": "a", // Δ¹⁰⁰(x¹⁰⁰) = 100!
                "68": "c", // f''(6.3) ≈ 0.23
                "69": "d", // Integral ∫x⁶dx = 2/9
                "70": "b"  // f(2) = 17.6
            }
        },
        // Computer Section
        "comp": {
            "2017": {
                "61": "a", // Jump control statements - Break and Continue
                "62": "a", // Problem solving sequence
                "63": "a", // ROM BIOS
                "64": "d", // FFFE hex = 65534 decimal
                "65": "b", // Valid C variable name
                "66": "b", // Octal base = 8
                "67": "a", // Array - same type
                "68": "b", // Cache memory - bridge speed gap
                "69": "d", // Firewall functions
                "70": "c", // Machine language - binary language
                "71": "b", // Program Counter
                "72": "b", // C code output x++ + ++y
                "73": "b", // IEEE 754 standard
                "74": "c", // Semicolon terminates C statement
                "75": "b", // Multiprogramming
                "76": "b", // Compilation
                "77": "a", // MAR - address of next location
                "78": "b", // Default return type int
                "79": "c", // SMTP for email
                "80": "b"  // Programming structures - 1 and 3
            },
            "2018": {
                "61": "a", // Jump control statements
                "62": "a", // Problem solving sequence
                "63": "c", // OS functions - 1 and 3
                "64": "d", // FFFE hex = 65534
                "65": "c", // Both compiler and linker statements
                "66": "c", // Floating point constant - 1 only
                "67": "c", // Modem factors - 1 and 3
                "68": "b", // Memory size - address lines
                "69": "d", // Firewall functions - 1, 2, 3
                "70": "c", // Machine language - directly executed
                "71": "c", // GCD algorithm
                "72": "b", // Array and strings - 1 and 2
                "73": "d", // BCD and octal - 2 and 4
                "74": "a", // Max integer 2^n-1
                "75": "b", // Right to left operators - 1, 2, 4
                "76": "a", // Grammatical errors only
                "77": "b", // Firmware
                "78": "b", // Logical error
                "79": "c", // Disc capacity - 33554432 bytes
                "80": "b"  // Low-level language - machine language
            },
            "2019": {
                "41": "c", // Data bus
                "42": "d", // BCD only - positional weighted
                "43": "c", // 217/12 quotient 10010 remainder 0001
                "44": "c", // Linker
                "45": "c", // Antivirus - utility software 3 only
                "46": "b", // Network protocol incorrect - 1 and 3
                "47": "d", // Spyware
                "48": "b", // Subroutine - 3 only not correct
                "49": "b", // Linux for cost reduction
                "50": "b", // SMTP for email
                "61": "a", // DNS
                "62": "c", // Associative memory
                "63": "b", // Distributed system
                "64": "c", // Fiber optic cable
                "65": "c", // Eavesdropping
                "66": "b", // NICNET
                "67": "c", // Fiber optic - higher bandwidth
                "68": "a", // Paging
                "69": "d", // OS functions - 1, 2, 3
                "70": "b"  // Flash memory
            },
            "2020": {
                "41": "a", // Keyboard and monitor
                "42": "d", // All 3 expression statements
                "43": "b", // Weighted codes - BCD and 8421
                "44": "a", // ARP not application layer
                "45": "c", // Two's complement
                "46": "d", // OCR, OMR, MICR - all
                "47": "d", // C# for .NET
                "48": "b", // Input device provides data
                "49": "d", // CRT components - all 3
                "50": "c", // Binary to hex 1F7.D4
                "51": "c", // BCD 521.6
                "52": "c", // Steganography
                "53": "c", // Apple iOS not browser
                "54": "b", // ROM not erasable
                "55": "d", // 1024x1024 Kilo Bytes
                "56": "b", // ISO 27001 - InfoSec
                "57": "d", // IEEE 802.11b
                "58": "b", // Flip-flop
                "59": "c", // 15F6G not valid hex
                "60": "b"  // Secondary memory permanent
            },
            "2021": {
                "51": "c", // Hierarchical model
                "52": "c", // Star topology - 3 only advantage
                "53": "b", // Python platform dependent
                "54": "b", // IMAP for email
                "55": "b", // LINUX not RTOS
                "56": "d", // Paging
                "57": "c", // Word processor not system software
                "58": "b", // Binary AND gives 100101
                "59": "b", // Output devices - 1, 2, 3
                "60": "d", // SVG not raster
                "71": "c", // ARP determines MAC
                "72": "a", // 2048 locations = 11 address lines
                "73": "c", // Human problem
                "74": "b", // Internal memory - 1, 2, 4
                "75": "a", // Debugging - 1, 2, 4
                "76": "c", // Gray to binary 11001011
                "77": "d", // Cache memory first
                "78": "c", // Hex 6251 octal = CA9
                "79": "c", // Windows CE embedded
                "80": "b"  // Lexical analyzer output - tokens
            },
            "2022": {
                "31": "a", // Program counter
                "32": "b", // Highest digit = base-1
                "33": "d", // Deadlock - all 3 conditions
                "34": "d", // Associative memory
                "35": "c", // 59 in 8-bit = 00111011
                "36": "a", // Raster - JPEG, GIF, PNG
                "37": "b", // DES symmetric-key
                "38": "c", // ISDN
                "39": "c", // Hex 32FC.75 to octal 31374.352
                "40": "b", // Batch OS - 2 and 3
                "71": "a", // PROM written once
                "72": "d", // Process cycle - W->R->E->T
                "73": "b", // Data processing - memory and CPU
                "74": "d", // Machine cycle - all 3
                "75": "a", // IPSEC
                "76": "b", // Non-volatile - EPROM 3 only
                "77": "c", // Star and Mesh not affected
                "78": "d", // IPC - message passing and shared memory
                "79": "d", // OS goals - all 3
                "80": "a"  // ACID - 1, 2, 3
            },
            "2023": {
                "61": "a", // CISC variable, RISC parallel - 1 and 2
                "62": "b", // Audio - MPEG, WAV, WMA
                "63": "a", // Paging
                "64": "a", // Application layer - SMTP, FTP, DHCP
                "65": "b", // Cache - 2 and 3
                "66": "c", // Real-time OS
                "67": "b", // Gray code statement only
                "68": "c", // Structural language
                "69": "c", // Linux open source
                "70": "a", // TCP/IP and NIC - 1 and 2
                "71": "d", // SQL all 3 statements
                "72": "b", // Cryptography - 2 and 3
                "73": "b", // Modem
                "74": "b", // UNIX Kernel
                "75": "a", // OCR device
                "76": "a", // RISC - 1 and 2
                "77": "c", // Stable sort - bubble, merge, insertion
                "78": "b", // Library linking - 2 only
                "79": "d", // Octal 6251 hex = CA9
                "80": "d"  // Firewall terminology - all 3
            },
            "2024": {
                "41": "d", // Debugger - all 3 statements
                "42": "d", // OS - all 3 statements
                "43": "d", // Utility programs - all 5
                "44": "c", // Non-repudiation
                "45": "a", // ICMP ARP at network layer
                "46": "a", // 59 two's complement = 11000101
                "47": "a", // Compiler and interpreter - 1 only
                "48": "b", // Webcam - I and II
                "49": "d", // CPU operations - all 4
                "50": "d", // Email ports - 25, 110, 143
                "51": "d", // BIOS - all 3 functions
                "52": "a", // IPSEC tunneling
                "53": "b", // Distributed IPC - message passing
                "54": "c", // Both statements correct
                "55": "d", // Network layer - NMP only
                "56": "a", // Network devices - repeater, bridge, hub
                "57": "d", // DBMS - all 3 statements
                "58": "d", // Input devices - all 3 statements
                "59": "d", // Looping - while, for, do-while
                "60": "c"  // Hierarchical model
            },
            "2025": {
                "31": "d", // Bus topology
                "32": "b", // Hub for star topology
                "33": "d", // Round Robin scheduling
                "34": "c", // SSD advantages - I, III, IV
                "35": "c", // Both hex/octal statements correct
                "36": "d", // OS - all 3
                "37": "b", // Space complexity
                "38": "c", // Runtime environment
                "39": "a", // Breakpoints
                "40": "c", // Server in client-server DBMS
                "71": "d", // Flowcharts - diagrammatic representation
                "72": "d", // Linker combines object files
                "73": "d", // VR characteristics - all 3
                "74": "d", // Multimedia - all 5
                "75": "d", // Router - all 3 statements
                "76": "c", // Do-While loop
                "77": "a", // Virtual memory - I and II
                "78": "c", // Firewall checks packets
                "79": "d", // Wi-Fi IEEE 802.11
                "80": "b"  // Logic Unit in CPU
            }
        }
    },
    // Paper 2
    "paper2": {
        // Linear Models
        "linear": {
            "2017": {},
            "2018": {},
            "2019": {},
            "2020": {},
            "2021": {},
            "2022": {},
            "2023": {},
            "2024": {},
            "2025": {
                "51": "a", // Two-way ANOVA df error pq(m-1)
                "52": "c", // B and C differ significantly (37-27=10>5.62)
                "53": "b", // Orthogonal design
                "54": "c", // Mixed model - treatments fixed, blocks random
                "55": "c", // Both idempotent and generalized inverse statements
                "56": "d", // x=2, y=9, z=18
                "57": "c", // Both observational and normal equations statements
                "58": "b", // Z = G^(-1/2)Y transformation
                "59": "c", // alpha = -1 for uncorrelated estimates
                "60": "c", // Both I and II least squares estimators
                "61": "c", // BLUE of theta1 = (X+Z)/6
                "62": "a", // BLUE of theta2 = (-X+Z)/6
                "63": "b", // BLUE of beta = (Y1+2Y2+3Y3)/14
                "64": "a", // Variance = sigma^2/14
                "65": "a"  // Estimability condition l1-l2 = m1-m2
            }
        },
        // Statistical Inference and Hypothesis Testing
        "inference": {
            "2017": {},
            "2018": {},
            "2019": {},
            "2020": {},
            "2021": {},
            "2022": {},
            "2023": {},
            "2024": {},
            "2025": {
                "1": "d",  // III only - UW consistent for product
                "2": "b",  // Consistent estimator
                "3": "a",  // s^2 more efficient than S^2
                "4": "c",  // UMVUE of Poisson lambda - Xbar
                "5": "c",  // UMVUE definition - minimum MSE
                "6": "a",  // V(s^2) = 2σ^4/(n-1)
                "7": "c",  // Both CI statements correct
                "8": "b",  // T complete family only
                "9": "c",  // T unbiased and consistent
                "10": "b", // Pivot - (X(2)+X(1)-2θ)
                "11": "a", // Level = sup P(x∈C|h)
                "12": "c", // Power = 0.729
                "13": "c", // Both power and unbiased statements
                "14": "d", // Normal has MLR
                "15": "c", // Moment estimate θ = 2.30
                "16": "c", // Both SPRT statements correct
                "17": "c", // Both Uniform distributions
                "18": "a", // T sufficient only
                "19": "d", // Pivot - -Σlog Fθ(Xi)
                "20": "a", // I and II only - MLE and sufficient
                "21": "a", // Smallest observation consistent
                "22": "c", // Both mean statements correct
                "23": "b", // CI width = 2cσ/√n
                "24": "c", // Unbiased estimator = 3X-2
                "25": "c", // Unbiased = ΣXi - 1
                "26": "a", // T unbiased for p(1-p)/n
                "27": "d", // MVUE = (n+1)T/n
                "28": "c", // Both sufficiency statements
                "29": "d", // Unbiased N = 2X̄ - 1
                "30": "b", // Moment estimate θ = 2.5
                "31": "d", // Cramer-Rao inequality
                "32": "d", // Sufficient statistic - product
                "33": "b", // Conditional prob = 1/C(2,t)
                "34": "c", // Sample mean = 210
                "35": "a", // df = 19 for paired t-test
                "36": "c", // Unbiased test power > alpha
                "37": "b", // MLE of θ = x̄
                "38": "a", // I only - MoM = 2x̄
                "39": "b", // MoM estimator of a
                "40": "c", // MoM estimator of b
                "41": "b", // II only - ancillary not complete
                "42": "c", // Binomial T both sufficient and complete
                "43": "a", // I only - sufficient for subclass
                "44": "d", // Blackwellization - unbiased with lesser variance
                "45": "c", // Both confidence set statements
                "46": "b", // Unbiased of (-a)^x = e^{-aλ}
                "47": "b", // MLE of μ = x̄
                "48": "c", // MLE of σ^2 = Σ/n
                "49": "a", // A ≥ (1-β)/α
                "50": "a"  // B ≤ β/(1-α)
            }
        },
        // Official Statistics
        "official": {
            "2017": {},
            "2018": {},
            "2019": {},
            "2020": {},
            "2021": {},
            "2022": {},
            "2023": {},
            "2024": {},
            "2025": {
                "66": "b", // Public Good - I, II, III only
                "67": "d", // HFI - All 4 indicators
                "68": "c", // Census house definition - separate unit with separate entrance
                "69": "b", // NSS 80th round - II only (Health and Telecom surveys)
                "70": "d", // Census Act - all 4 statements correct
                "71": "a", // Normal financing - Government budgets only
                "72": "c", // Houselisting - I and III only (amenities, floor/wall/roof)
                "73": "b", // SECC - identification of beneficiaries for welfare programs
                "74": "b", // Time Reversal Test - Marshall-Edgeworth and Fisher's only
                "75": "d", // UN Fundamental Principles - all 3 statements correct
                "76": "c", // UNSC - both statements correct (24 members, India 2024)
                "77": "b", // PLFS - wage rates NOT an objective
                "78": "a", // Static consumption - Laspeyres most convenient
                "79": "c", // Population enumeration - 0:00 Hours of 31st March
                "80": "a"  // Livestock Census - I only (every 5 years, 13 species not 25)
            }
        }
    }
};

// Export for use in other scripts (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = QUESTION_ANSWERS;
}

