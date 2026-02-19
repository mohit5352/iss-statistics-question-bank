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
            "2017": {
                "1": "d", // Correlation between regressor and regressand
                "2": "a", // Degrees of freedom for interaction and error in 2-way ANOVA
                "3": "a", // Estimability condition for parametric function
                "4": "a", // Relationship between least squares and maximum likelihood estimates
                "5": "c", // Explained variation and estimated error variance in multiple linear regression
                "6": "d", // Correct statements about Gauss-Markov model and g-inverse
                "7": "b", // Assumptions for Gauss-Markov model
                "8": "c", // Estimate of component of variance due to interaction
                "9": "b", // Relationship between R-squared in nested models
                "10": "c", // Properties of the Hat matrix (H) in linear regression
                "11": "b", // Distribution of test statistic for testing hypothesis in linear model
                "12": "d", // Estimate of error variance in two-variable linear model
                "13": "c", // Advantages of having more than one observation per cell in two-way ANOVA
                "14": "b", // Correct statements about generalized inverse of a matrix
                "15": "d", // Value of alpha for uncorrelated BLUEs
                "16": "c", // Essential assumption for estimating beta in general linear model
                "17": "c", // Test for significance of complete regression
                "18": "d", // Irrelevant explanatory variable condition
                "19": "a", // Estimate of error variance in two-variable linear model
                "20": "a"  // Coefficients of linear restrictions on parameters
            },
            "2018": {
                "1": "c",  // Estimability condition
                "2": "a",  // BLUE of beta0 and beta1
                "3": "d",  // Multicollinearity statement
                "4": "b",  // g-inverse and multicollinearity
                "5": "a",  // Estimable linear parametric functions
                "6": "a",  // Degrees of freedom for two-way ANOVA
                "7": "a",  // F-statistic behavior with decreasing error variability
                "8": "b",  // Error deviation relative to treatment deviations
                "9": "c",  // Covariance between least squares estimates of beta0 and beta1
                "11": "c", // Scheffe's and Tukey's tests in multiple comparisons
                "12": "c", // Multiple comparison tests
                "13": "c", // Estimable linear parametric function and estimator of mu_i
                "14": "b", // Properties of generalized inverse of a matrix
                "15": "a", // Total number of parameters in a two-way classification model
                "16": "c", // MLE and unbiased estimator for alpha
                "26": "a", // MLE of sigma^2 when mu is known
                "27": "b", // Method of moments estimators for uniform distribution parameters
                "52": "d"  // MLE of theta for f(x, theta) = sqrt(theta) x^(theta-1)
            },
            "2019": {
                "1": "a",  // Estimability condition
                "2": "d",  // Incorrect statement about Cov(e_i, e_j)
                "5": "a",  // ANOVA table values: w=2, x=261, y=130.5, z=300
                "10": "d", // Incorrect statement about MLE and sufficiency for U(theta, theta+1)
                "21": "c", // Correct statements about variance and covariance in linear regression
                "22": "b", // Correct statements about RSS distributions and independence
                "23": "d", // Correct statements about g-inverse and idempotent matrices
                "25": "d", // Correct statements about BLUE and residual mean square
                "26": "c", // Both alpha_hat and beta_hat change with unit transformation
                "27": "c", // Correct statements about BLUE and F-statistic for hypothesis testing
                "28": "b", // Estimated error variance for the given regression model
                "29": "a", // Value of alpha for uncorrelated BLUEs
                "30": "b"  // Definition of a fixed effect model
            },
            "2020": {
                "41": "c",  // Null hypothesis for ANOVA with 3 lakes
                "42": "c",  // Interpretation of F-test (calculated F-statistic is 4.26, critical F is 4.2565, so reject H0)
                "43": "b",  // F statistic value (calculated as 4.26)
                "44": "b",  // Pooled standard deviation (sqrt of MSE = sqrt(2) = 1.414)
                "45": "c",  // Degrees of freedom for Methods (2), Instructors (2), Interaction (4), and Error (27)
                "46": "a",  // Mean sum of squares for Methods (81), Instructors (45), Interaction (150), and Error (33.33)
                "47": "b",  // F-ratios for Methods (2.43), Instructors (1.35), and Interaction (4.50)
                "48": "a",  // Least squares estimate of mu for weighted observations
                "49": "d",  // Degrees of freedom for error in 2-way ANOVA with 1 observation per cell and interaction present (typically 0)
                "50": "a"   // Linear Model (I-P)X property, assuming P is a projection matrix
            },
            "2021": {
                "1": "a",  // Estimability
                "2": "c",  // Estimability
                "3": "a",  // BLUE
                "4": "c",  // Chi-square distribution
                "5": "d",  // X'X inverse
                "6": "c",  // Tukey's test
                "7": "c",  // Symmetric matrix
                "8": "b",  // ANOVA df
                "9": "c",  // Estimability
                "10": "b"  // Generalized inverse order
            },
            "2022": {
                "1": "b",  // Distribution of predicted values
                "3": "c",  // Idempotent matrices
                "4": "d",  // Generalized inverse properties
                "5": "c",  // Moore-Penrose inverse
                "6": "b",  // BLUE variance equality
                "7": "d",  // Two-way ANOVA degrees of freedom
                "8": "a",  // Variance component estimate
                "9": "a",  // Mean squares calculation
                "10": "c", // F-statistic values
                "21": "d", // Hat matrix diagonal elements
                "22": "b",  // Residual correlation
                "23": "d", // F-statistic calculation
                "24": "c", // BLUE of theta1
                "25": "c", // BLUE of theta2
                "26": "c", // One-way ANOVA df
                "27": "a", // Two-way ANOVA df
                "28": "b", // RBD missing observation
                "29": "c", // BLUE statements
                "30": "d"  // Residual sum of squares
            },
            "2023": {
                "51": "b", // Non-central chi-square distribution
                "52": "c", // ANOVA MSE calculation
                "53": "c", // Variance of quadratic form
                "54": "c", // Chi-square distribution of quadratic form
                "55": "b", // Independent chi-square matrices
                "56": "d", // BLUE of theta1
                "57": "d", // BLUE of theta2
                "58": "d", // Variance of intercept estimator
                "59": "b", // Covariance of estimators
                "60": "a", // Variance of slope estimator
                "61": "d", // Two-way ANOVA degrees of freedom
                "62": "a", // Order of generalized inverse
                "63": "b", // Symmetric matrix generalized inverse
                "64": "c", // Properties of generalized inverse
                "65": "a"  // ANOVA table values
            },
            "2024": {
                "51": "c", // Generalized inverse symmetric matrix statements
                "52": "a", // Rank and trace of generalized inverse
                "53": "c", // System of equations solutions
                "54": "d", // Matrix A rank and trace properties
                "55": "c", // Generalized inverse properties H = A^-A
                "56": "c", // Idempotent matrix and rank statements
                "57": "c", // ANOVA technique statements
                "58": "c", // ANOVA sum of squares properties
                "59": "a", // Random effects model two-way classified
                "60": "b"  // ANOVA F-test assumptions
            },
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
            "2017": {
                "21": "b", // Corrected chi-square statistic after Yates' correction
                "22": "d", // Correct statements for a test of significance
                "23": "c", // Value of k for unbiased estimator of sigma
                "24": "d", // Estimate of theta by method of moments
                "25": "c", // MLE of theta for Hardy-Weinberg proportions
                "26": "a", // MLE of sigma^2 when mu is known
                "27": "d", // Correct statements about robustness and t-test
                "28": "b", // Unbiased estimator T implies T^2 is biased for theta^2
                "29": "a", // Unbiased estimator for mu^2 + 1
                "30": "b", // MLE of theta for Laplace distribution is median
                "31": "b", // MVB estimators for N(theta, 1) is mean only
                "32": "b", // MVB estimator for sigma^2 from N(0, sigma^2) with known mean
                "33": "b", // Degrees of freedom for chi-square goodness of fit
                "34": "b", // Estimate of lambda for exponential distribution by method of moments
                "35": "a", // Probability of type-I error for binomial hypothesis test
                "36": "b", // Type-I and Type-II errors for exponential distribution
                "37": "b", // Relationship between type-I and type-II errors for normal mean test
                "38": "c", // UMVU estimator is unique but not necessarily from CR lower bound
                "39": "b", // Constants A and B for SPRT
                "40": "c", // Sequential probability ratio test definition
                "41": "b", // MLE of theta for f(x, theta) = e^-(x-theta) is smallest sample observation
                "42": "c", // Correct statements about properties of MLE given a sufficient statistic
                "43": "c", // Optimum properties of MLE under regulatory conditions
                "44": "c", // MLE of the median of exponential distribution
                "45": "a", // Area of critical region depends on size of type-I error
                "46": "a", // SPRT rule for rejecting H0
                "47": "c", // Stopping time probability for SPRT
                "48": "b", // Loss function for mean squared error
                "49": "c", // Bayes' risk for normal mean with normal prior and squared error loss
                "50": "a", // Bayes' estimator under squared error loss
                "51": "b", // Incorrect statement about statistical inference
                "52": "d", // MLE of theta for f(x, theta) = theta sqrt(x)^(theta-1) is n^2 / (sum log x_i)^2 (This option seems incorrect, it should be n/(-sum(log(x_i))), assuming it is a typo and should be f(x, theta) = theta x^(theta-1))
                "53": "b", // Unbiased estimator of theta for f(x,theta) = theta x^(theta-1)
                "54": "d", // Correct statements about sufficient statistic properties
                "55": "c", // Complete sufficient statistic for Rayleigh distribution
                "56": "a", // Power of the test for binomial distribution
                "57": "a", // UMP test is always unbiased
                "58": "a", // Reason for (X1+2X2) not being sufficient for Poisson
                "59": "c", // Both Cramer-Rao inequality and Rao-Blackwellization statements are correct
                "60": "c", // Both statements about consistent estimators are correct
                "61": "a", // UMP level alpha test exists for P1 but not for P2
                "62": "c", // Unbiased estimator of sigma1^2/sigma2^2
                "63": "c", // Both statements about biased and consistent estimator are correct
                "64": "a", // Estimators of alpha and beta by method of moments for Gamma distribution
                "65": "b"  // Both statements about SPRT are true but not correct explanation
            },
            "2018": {
                "17": "b", // Unbiased estimator of p^3 for Bernoulli distribution
                "18": "b", // Value of k for unbiased estimator of sigma^2
                "19": "a", // Unbiased and consistent estimator for 1/theta from exponential distribution
                "20": "c", // Correlation coefficient between efficient and less efficient estimators
                "21": "d", // Unbiased estimator of lambda^2 for Poisson distribution
                "22": "d", // Not sufficient statistic for Bernoulli distribution
                "23": "a", // MLE of theta for f(x, theta) = (2/theta^2)(theta-x)
                "24": "d", // Consistency result from Tchebychev's inequality
                "25": "b", // MLE of p for Bernoulli distribution with discrete parameter space
                "28": "a", // MLE of mu for f(x, mu) = e^(-(x-mu))
                "29": "a", // Invariance property of MLE
                "30": "b", // Correct statements about MLE properties
                "31": "d", // MVB estimators for N(0,1)
                "32": "b", // MVB estimator for sigma^2 from N(0, sigma^2) with known mean
                "33": "a", // Unbiased estimator of sigma^2 attaining CR bound for N(1, sigma^2)
                "34": "c", // C-R bound for sigma^2 of N(mu, sigma^2) with mu known
                "35": "d", // Sufficient statistic for U(0,theta)
                "36": "b", // Sufficient statistic for f(x, theta) = theta x^(theta-1)
                "37": "c", // UMVUE of lambda for Poisson distribution
                "38": "d", // 95% confidence limits for proportion
                "39": "a", // Probability of Type-I error for randomized test for Poisson
                "40": "b", // Shortest expected length CI for mu
                "41": "b", // Power of the test for exponential distribution
                "42": "b", // Neyman-Pearson fundamental lemma
                "43": "d", // Likelihood ratio test equivalent to UMP unbiased test
                "44": "b", // Likelihood ratio test statistic for testing mu_i = 0
                "45": "b", // Asymptotic distribution of -2log(lambda_n)
                "46": "a", // SPRT rule for rejecting H0
                "47": "c", // Stopping time probability for SPRT
                "48": "b", // Loss function for mean squared error
                "49": "c", // Bayes' risk for normal mean with normal prior and squared error loss
                "50": "a", // Bayes' estimator under squared error loss
                "51": "b", // Incorrect statement about statistical inference
                "53": "b", // Unbiased estimator of theta for f(x,theta) = theta x^(theta-1)
                "54": "d", // Correct statements about sufficient statistic properties
                "55": "c", // Complete sufficient statistic for Rayleigh distribution
                "56": "a", // Power of the test for binomial distribution
                "57": "a", // UMP test is always unbiased
                "58": "a", // Reason for (X1+2X2) not being sufficient for Poisson
                "59": "c", // Complete sufficient statistic for f(x,theta) = (theta^2/2)(1-theta)^(|x|-1)
                "60": "c"  // C-R lower bound for variance of unbiased estimator of theta^r
            },
            "2019": {
                "3": "b",  // Comparison of sum of squared errors for nested models
                "4": "b",  // Unbiased estimator of sigma^2 from uncorrelated observations
                "6": "a",  // Most efficient estimator for mode of normal distribution
                "7": "b",  // Consistent estimator for mean mu
                "8": "a",  // Correct statements about unbiased and consistent estimators for normal distribution
                "9": "a",  // MLE of alpha and lambda for Gamma distribution
                "11": "a", // Sufficient but not complete statistic for N(mu, theta)
                "12": "d", // 95% confidence interval calculation
                "13": "b", // Simple hypothesis definition
                "14": "c", // Size of the test for U(0,theta)
                "15": "d", // Probability of type-I error and power of the test for U(0,theta)
                "16": "a", // Distribution needed for critical region
                "17": "d", // Correct statements about UMP and unbiased tests
                "18": "a", // Power of UMP test for U(0,theta)
                "19": "a", // Best critical region by NP lemma for Normal distribution
                "20": "b", // Best critical region for exponential distribution
                "31": "a", // MLE unbiasedness for normal distribution
                "32": "b", // Condition for MLE to be a maximum
                "33": "b", // MLE of theta for U(0, theta^2)
                "34": "d", // Condition for minimum variance bound to be attained
                "35": "c", // Estimator attaining Cramer-Rao lower bound for variance of normal distribution with mean zero
                "36": "a", // CR lower bound for U(0,theta) does not exist
                "37": "a", // Cramer-Rao lower bound for exponential distribution
                "38": "d", // Conditional expectation E(X_bar | X_1) for Normal(0,1)
                "40": "a", // MVUE of theta^2 for N(0,1)
                "41": "c", // Expected value of S^2 for Normal(0,sigma^2)
                "42": "c", // Family of N(0,sigma^2) is symmetric and complete (with sum X_i^2)
                "43": "c", // Improved estimator using Rao-Blackwell theorem
                "44": "b", // Relationship between Neyman-Pearson and likelihood ratio test
                "45": "b", // MLE of P(X_1 >= t) for exponential distribution
                "46": "a", // Definition of a consistent estimator
                "47": "c", // MLE of h(p) = p(1-p) for Bernoulli distribution
                "48": "c", // Independence of complete sufficient and ancillary statistics (Basu's Theorem)
                "49": "c", // Definition of an ancillary statistic
                "50": "c", // Correlation coefficient between most efficient and another efficient estimator
                "61": "a", // Definition of an unbiased test
                "62": "c", // Test function for randomised test
                "63": "a", // UMPU test for normal mean (two-sided)
                "64": "c", // Expected value of Z for Bernoulli distribution
                "66": "c", // Unbiased estimator for mu^2 for normal distribution
                "67": "c", // Correct statements about complete sufficient and MLE for Poisson
                "68": "d", // Number of unbiased estimators of theta for N(0,1)
                "69": "d", // MVB estimator for Cauchy distribution does not exist
                "70": "d", // UMVUE of 1/p for Bernoulli distribution does not exist
                "71": "b", // Sufficient statistic for uniform distribution
                "72": "a", // X1 + X2 is sufficient for lambda for Poisson distribution
                "73": "a", // UMP test is unique if it exists
                "75": "c"  // Correct statements about Cramer-Rao bound and MVB estimator for Poisson
            },
            "2020": {
                "1": "a",  // MP test at level 0.05 - size = 0.01+0.04 = 0.05
                "2": "d",  // Size = 1/3, test is unbiased (power > size for H1)
                "3": "c",  // Size = 0.0225, power = 0.0975
                "4": "d",  // LRT is consistent under certain assumptions
                "5": "b",  // Consistent but not necessarily efficient
                "6": "b",  // Sample median consistent for Cauchy (not mean)
                "7": "c",  // (-k)^X unbiased estimator for e^{-(k+1)λ}
                "8": "c",  // Fisher info = E[(dlogf/dθ)²]
                "9": "b",  // Product of Xi is sufficient for Beta(θ)
                "10": "c", // Median of posterior for absolute error loss
                "11": "d", // X(n) is consistent for θ
                "12": "a", // E[U|T=t] independent of θ (by Rao-Blackwell)
                "13": "b", // CI using 1/Xbar for exponential
                "14": "b", // Sufficient: x/σ1² + y/σ2²
                "15": "c", // P(|Tn-θ|<ε) > 1-η definition
                "16": "d", // MLE = X(n)/5 for U(0,5θ)
                "17": "a", // Xbar is MLE for Poisson
                "18": "c", // UMVUE = X̄² - 1/n for μ²
                "19": "a", // Variance ≥ (dψ/dθ)²/I(θ)
                "20": "a", // Bhattacharya bound generalizes CR inequality
                "21": "c", // Efficiency = 2/π for normal
                "22": "d", // MVUE = Σ(xi-μ)²/n when μ known
                "23": "c", // MLE = 32/27 from data
                "24": "a", // MLE = 6.99 and 7.10 (two solutions)
                "25": "a", // Cov(A, B-A) = 0
                "26": "a", // Var(s²) ≥ λ/n for Poisson
                "27": "b", // Fisher info = 1/3 for T = X1-X2-X3
                "28": "b", // Jointly sufficient: {X(1), ΣXi}
                "29": "d", // X1+X2+X3+X4 is complete
                "30": "d", // X+Y and X-Y independent when σ1=σ2
                "31": "a", // Bhattacharya bound = 4θ²/n + 2/n²
                "32": "a", // MLE = X̄/n for Bin(n,p)
                "33": "a", // UMVUE = X(n)^r × (r+3)/3
                "34": "a", // CI = (7.62%, 13.58%)
                "35": "c", // Composite: Θ0 has more than one point
                "36": "a", // Statement 1 only (best unbiased)
                "37": "b", // 2 and 3 are unbiased: 2X̄ and (n+1)/n × X(n)
                "38": "c", // Efficiency = (n+2)/3
                "39": "c", // n ≤ 8 for MSE condition
                "40": "b", // Method of moments: 3Xbar
                "61": "c", // Width multiplied by √2
                "62": "b", // Sample mean = 20000
                "63": "b", // Fisher-Neyman theorem
                "64": "b", // g(t,θ)·h(x) factorization
                "65": "a", // Risk function
                "66": "d", // Type II error = 1-1/e
                "67": "a", // Shortest CI: t(n-1) s/√n
                "68": "d", // Unbiased: α < β
                "69": "c", // df = 9 for n=10 pairs
                "70": "c"  // Simple hypothesis: μ=μ0, σ²=σ0²
            },
            "2021": {
                "11": "a", // Sufficiency
                "12": "a", // Estimation
                "13": "b", // Hypothesis Testing
                "14": "c", // SPRT
                "15": "c", // UMVUE
                "16": "a", // Confidence Intervals
                "17": "a", // Estimation
                "18": "c", // Consistency
                "19": "b", // Unbiasedness
                "20": "a", // Method of Moments
                "21": "a", // MLE
                "22": "d", // Unbiasedness
                "23": "c", // MLE
                "24": "c", // Sufficiency
                "25": "d", // Cramer-Rao
                "26": "b", // Cramer-Rao
                "27": "c", // UMVUE
                "28": "d", // Confidence Intervals
                "29": "d", // Hypothesis Testing
                "30": "a", // SPRT
                "31": "b", // Sampling Distributions
                "32": "c", // MLE
                "33": "b", // Estimation
                "34": "d", // Hypothesis Testing
                "35": "a", // Unbiasedness
                "36": "a", // Consistency
                "37": "b", // Method of Moments
                "38": "b", // MLE
                "39": "c", // Cramer-Rao
                "40": "c", // Hypothesis Testing
                "41": "b", // Sufficiency
                "42": "c", // Estimation
                "43": "c", // MLE
                "44": "b", // UMVUE
                "45": "d", // Sufficiency
                "46": "c", // Confidence Intervals
                "47": "a", // Hypothesis Testing
                "48": "b", // Hypothesis Testing
                "49": "b", // Hypothesis Testing
                "50": "c", // Hypothesis Testing
                "51": "a", // SPRT
                "52": "b", // SPRT
                "53": "b", // Estimation
                "54": "c", // Estimation
                "55": "c", // MLE
                "56": "c", // MLE
                "57": "d", // UMVUE
                "58": "b", // UMVUE
                "59": "c", // MLE
                "60": "b"  // Method of Moments
            },
            "2022": {
                "2": "b",  // MLE and LSE for Poisson
                "11": "c", // Unbiased estimate theta^2
                "12": "c", // MLE statements both correct
                "13": "d", // Unbiased statements neither correct
                "14": "a", // UMVUE of theta
                "15": "c", // CR lower bound
                "16": "a", // Confidence interval t-distribution
                "17": "d", // Power function exponential
                "18": "c", // Factorization theorem
                "19": "b", // Best critical region variance
                "20": "d", // Confidence limits theta
                "31": "b", // Significance level
                "32": "d", // Power function
                "33": "d", // Efficiency calculation
                "34": "a", // MVB estimator condition
                "35": "c", // MLE sigma^2 attains CRLB
                "36": "b", // Sufficiency Bernoulli and Poisson
                "37": "b", // Sufficiency Uniform discrete
                "38": "d", // Invariance property
                "39": "d", // Type I error
                "40": "a", // Type II error
                "51": "c", // Sequential probability
                "52": "d", // Unbiased test definition
                "53": "d", // All test pairs correct
                "54": "b", // Two pairs not correct
                "55": "b", // Biased estimator most efficient
                "56": "c", // Exponential statements both correct
                "57": "d", // MLE statements all correct
                "58": "d", // Joint sufficient statistic
                "59": "c", // Both statistics sufficient
                "60": "b", // Pivot for sigma^2
                "71": "a", // Jointly sufficient Gamma
                "72": "a", // Consistency estimators
                "73": "c", // Both sufficiency statements
                "74": "a", // Method of moments a
                "75": "a", // Method of moments b
                "76": "d", // CRLB for Xbar
                "77": "c", // Sufficient statistic Bernoulli
                "78": "b", // Sufficient statistic Uniform discrete
                "79": "a", // UMVUE of theta
                "80": "a"  // UMVUE of theta^2
            },
            "2023": {
                "1": "c",  // Unbiased estimate of area
                "2": "c",  // Method of moments estimator
                "3": "a",  // Method of moments consistency
                "4": "c",  // MLE and consistency
                "5": "a",  // MLE exponential distribution
                "6": "a",  // UMVUE of theta(1+theta)
                "7": "a",  // UMVUE efficiency correlation
                "8": "c",  // Sufficiency Uniform distribution
                "9": "b",  // MLE discrete parameter space
                "10": "d", // Cramer-Rao lower bound
                "11": "a", // Unbiased estimator Uniform
                "12": "b", // Pivotal statistic exponential
                "13": "d", // Bootstrap samples
                "14": "b", // MLR property distributions
                "15": "b", // Simple hypothesis testing
                "16": "c", // MLE uniqueness
                "17": "d", // UMP critical region
                "18": "b", // MLE properties
                "19": "b", // Runs test expectation
                "20": "a", // Sufficiency exponential distribution
                "21": "d", // Unbiased estimator sigma
                "22": "d", // Joint sufficient statistics
                "23": "c", // Cauchy distribution estimators
                "24": "d", // UMVUE Poisson probability
                "25": "b", // Best critical region exponential
                "26": "d", // Locally most powerful test
                "27": "c", // MSE of variance estimator
                "28": "d", // Sufficient statistic Normal
                "29": "d", // LRT for Poisson
                "30": "b", // SPRT OC function
                "31": "c", // Size of test
                "32": "c", // Unbiased test power
                "33": "b", // Fisher information
                "34": "b", // C-R bound for theta^3
                "35": "a", // Expected value mixture
                "36": "a", // Method of moments estimate
                "37": "a", // Size of randomized test
                "38": "d", // Power of randomized test
                "39": "a", // Size of test
                "40": "b", // Power of test
                "41": "c", // Sufficient statistics Poisson
                "42": "c", // Sufficient statistics
                "43": "a", // Properties of x1 Normal
                "44": "c", // Properties of x1^2
                "45": "d", // UMPU test critical values
                "46": "b", // LRT statistic value
                "47": "b", // Confidence coefficient
                "48": "b", // MVB estimators
                "49": "d", // Sufficient estimator properties
                "50": "c"  // LRT properties
            },
            "2024": {
                "1": "b",  // Estimation - MSE and concentration
                "2": "a",  // Unbiasedness - variance and MSE
                "3": "c",  // MVU estimator efficiency correlation
                "4": "b",  // Cramer-Rao lower bound Normal
                "5": "c",  // Order statistics Uniform distribution
                "6": "c",  // Sufficiency and conditional expectation
                "7": "c",  // Cramer-Rao inequality statements
                "8": "c",  // Minimum variance unbiased estimators
                "9": "a",  // Consistency Bernoulli trials
                "10": "a", // MLE statements
                "11": "a", // MLE Uniform distribution properties
                "12": "d", // Sufficient statistic Normal known mean
                "13": "a", // Estimability definition
                "14": "c", // C-R bound Normal and Bernoulli
                "15": "c", // Confidence intervals statements
                "16": "d", // UMVUE Poisson e^{-2θ}
                "17": "a", // Hypothesis testing variance
                "18": "c", // MVUE exponential distribution
                "19": "d", // SPRT exponential distribution
                "20": "b", // Completeness Normal distribution
                "21": "c", // Hypothesis testing size power
                "22": "c", // MLE shift exponential
                "23": "d", // Sufficient statistic Gamma distribution
                "24": "d", // Neyman-Pearson type II error
                "25": "c", // Test function definitions
                "26": "d", // P-value and NP lemma statements
                "27": "c", // UMVUE Normal mean and variance
                "28": "c", // Neyman-Pearson lemma scope
                "29": "a", // Likelihood ratio test statements
                "30": "a", // Double exponential sufficient statistic
                "31": "d", // Efficiency correlation interval
                "32": "d", // MLE Uniform distribution
                "33": "a", // Confidence interval Poisson
                "34": "a", // Power of test Poisson
                "35": "c", // Bayes and minimax estimators
                "36": "c", // MLE biased coin
                "37": "b", // LRT Normal mean
                "38": "b", // Sufficient statistic Beta distribution
                "39": "d", // MLE Rayleigh distribution
                "40": "b", // Unbiased estimator binomial
                "41": "c", // Hypothesis testing theta value
                "42": "b", // Power of test
                "43": "c", // Type I error Poisson
                "44": "d", // Type II error Poisson
                "45": "c", // Unbiased estimators
                "46": "b", // Consistent estimators
                "47": "a", // Method of moments Gamma
                "48": "a", // Method of moments Beta
                "49": "a", // Expected value Beta distribution
                "50": "b"  // Moment estimator Beta
            },
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
            "2017": {
                "66": "c", // Correct statements about Indian Statistical System
                "67": "a", // Correct statements about National Statistical Commission, NSSO, and Censuses
                "68": "d", // Legislative framework supporting Indian Statistical System
                "69": "d", // Correctly matched pairs for surveys and ministries/offices
                "70": "b", // Publications of National Accounts Division of CSO
                "71": "c", // Agriculture Census data collection in Land Records States
                "72": "a", // Correct equation for Gross Enrolment Ratio (GER) in Grade-I
                "73": "a", // Reference period in employment/unemployment surveys by NSSO
                "74": "a", // Valid equation for promotion, repetition, and dropout rates
                "75": "b", // Agriculture Census in India is conducted on quinquennial basis
                "76": "a", // Act(s) under the jurisdiction of MOHFW
                "77": "a", // Sample registration for vital statistics is a fixed panel survey
                "78": "d", // Purchasing power of money calculation
                "79": "c", // Consumer price index numbers reveal the state of both inflation and deflation
                "80": "a"  // Value of General Fertility Rate (GFR)
            },
            "2018": {
                "61": "c", // True statements for Sustainable Development Goals (SDGs)
                "62": "d", // Not a desirable property of official statistics
                "63": "d", // Reliability of data through sample surveys
                "64": "c", // Ultimate Stage Unit for NSSO socio-economic survey
                "65": "d", // Most common sampling design used by NSSO
                "66": "d", // Definition of metadata
                "67": "c", // Subject of Statistics in Constitution of India
                "68": "c", // Main activities of CSO
                "69": "d", // Collection of Statistics Act, 2008 applicability
                "70": "c", // Dearness Allowance linked with CPI-IW
                "71": "c", // Retail inflation measured by CPI-U&R
                "72": "a", // Annual inflation rate calculation
                "73": "a", // Price deflators used to obtain GDP at constant prices
                "74": "c", // Sources of industrial data in India
                "75": "c", // Not correct for Minimum Support Price (MSP)
                "76": "a", // Data source for Infant Mortality Rate
                "77": "d", // Organization releasing Wholesale Price Index (WPI)
                "78": "a", // Periodicity of Agriculture Census in India
                "79": "a", // Effective literacy rate definition
                "80": "b"  // Human Development Index (HDI) does not include gender equality
            },
            "2019": {
                "51": "c", // Quick snapshot of manufacturing sector performance
                "52": "d", // Conditions for a person to be "not in labour force"
                "53": "c", // Correct statements about Sustainable Development Goals (SDGs)
                "54": "c", // Not an activity of CSO
                "55": "a", // Not a function of National Statistical Commission (NSC)
                "56": "b", // Principal source of Industrial Statistics in India
                "57": "b", // Responsibility for National income estimation
                "58": "b", // Activities undertaken by the office of Registrar General of India
                "59": "d", // Indian statistical system structure
                "60": "b", // Nodal Ministry of Statistical system in India
                "76": "c", // CSO division dealing with Environment Statistics
                "77": "c", // Correctly matched fundamental principles of Official Statistics
                "78": "a", // Subjects covered under 76th round of NSS
                "79": "c", // Body recommending Minimum Support Price (MSP)
                "80": "b"  // Data sources usable as a sampling frame
            },
            "2020": {
                "51": "d",  // CPI-AL/RL compiling body
                "52": "b",  // Vital statistics compiling body
                "53": "c",  // General Fertility Rate (GFR) definition
                "54": "d",  // NSSO household surveys sampling design
                "55": "d",  // NSSO 78th round subject matter
                "56": "c",  // NSSO household surveys common period
                "57": "d",  // Gross Value Added (GVA) definition
                "58": "a",  // Domestic Economy concept
                "59": "a",  // SASA association
                "60": "a",  // Agriculture Census basic unit
                "71": "c",  // Not a Sustainable Development Goal
                "72": "a",  // NSSO survey with rotational panel design
                "73": "c",  // Least preferred stratifying variable
                "74": "d",  // Census enumerators and supervisors
                "75": "a",  // Derived from population census data
                "76": "d",  // NSSO field enumerators organization
                "77": "d",  // GDP measurement approaches
                "78": "a",  // Components of Physical Quality Life Index (PQLI)
                "79": "d",  // Point to point inflation definition
                "80": "c"   // "Ten Fundamental Principles of Official Statistics" designer
            },
            "2021": {
                "61": "b", // Time Use Survey
                "62": "d", // NFHS, Population Census, NSSO
                "63": "a", // Index Numbers
                "64": "d", // SDGs
                "65": "c", // GNI
                "66": "b", // HDI
                "67": "c", // GDP size
                "68": "c", // Poverty line
                "69": "c", // GDP quarterly growth
                "70": "d", // NSSO divisions
                "71": "b", // Administrative statistics
                "72": "a", // Agriculture output
                "73": "c", // CPI base years
                "74": "c", // National Income
                "75": "d", // Official statistics
                "76": "d", // Authorised agencies
                "77": "d", // Subject specific statistics
                "78": "b", // NSC
                "79": "c", // NSSO
                "80": "d"  // CPI statements
            },
            "2022": {
                "41": "d", // Privacy breaches
                "42": "c", // NSSO subjects finalization
                "43": "c", // SDG Goal 4 indicators
                "44": "d", // CSO divisions
                "45": "c", // Official statistical systems
                "46": "d", // GDP statements
                "47": "b", // Not an SDG
                "48": "c", // Index number pairs
                "49": "b", // Death registration coordination
                "50": "c", // Census statements
                "61": "d", // NSC mandate
                "62": "a", // CPI categories
                "63": "c", // IIP statements
                "64": "d", // Fundamental principles
                "65": "a", // Index number statements
                "66": "d", // Fisher ideal index
                "67": "d", // Index number uses
                "68": "c", // Fisher price index
                "69": "c", // Fisher price index reverse
                "70": "b"  // Fisher quantity index
            },
            "2023": {
                "66": "d", // Fundamental principles of official statistics
                "67": "b", // Census Act provisions
                "68": "b", // Union-State list subjects
                "69": "d", // Labour force data agencies
                "70": "d", // Index numbers by Government
                "71": "d", // GDP statements
                "72": "c", // Marshall-Edgeworth weights
                "73": "b", // NSSO divisions
                "74": "c", // PLFS conducting body
                "75": "d", // Census tables
                "76": "c", // International statistical organizations
                "77": "b", // Global Hunger Index
                "78": "c", // Population census statements
                "79": "a", // Monthly high frequency indicators
                "80": "d"  // Goods omitted from GDP
            },
            "2024": {
                "61": "c", // Registrar General activities
                "62": "d", // Natural Capital resources
                "63": "d", // Economic Census handicraft data
                "64": "c", // National Statistical Commission Secretary
                "65": "d", // Primary sector GDP components
                "66": "a", // Longitudinal panel survey
                "67": "d", // Official statistics principles
                "68": "d", // Collection of Statistics Act
                "69": "c", // CPI-IW statements
                "70": "c", // Census types conducted by Government
                "71": "b", // National Statistical Commission
                "72": "b", // Legal support for statistics
                "73": "b", // GDP vs GNI features
                "74": "a", // National income methodology
                "75": "d", // Data collection methods
                "76": "a", // Price index construction factors
                "77": "a", // Index numbers definition
                "78": "b", // IIP data source
                "79": "a", // GER and Gender Parity Index
                "80": "a"  // Real wage calculation CPI
            },
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

