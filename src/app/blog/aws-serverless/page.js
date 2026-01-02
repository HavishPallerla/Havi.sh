'use client';

import { Inter } from 'next/font/google';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export default function AWSServerlessPost() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <>
      <div
        className={`min-h-screen transition-colors duration-300 relative ${
          isDark ? 'bg-[#18243E]/50' : 'bg-[#fee6cd]/50'
        } ${inter.className}`}
      >
        
        <nav className="flex items-center justify-between px-8 py-6 relative z-10">
          <Link href="/" className="transition-opacity duration-200 hover:opacity-70">
            <Image
              src={isDark ? "/logo.png" : "/logo-dark.png"}
              alt="Havish Logo"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </Link>
          
          <div className="flex items-center space-x-8">
            <Link
              href="/projects"
              className={`text-sm ${
                isDark ? 'text-gray-300 hover:text-[#fee6cd]' : 'text-[#18243E]/70 hover:text-[#18243E]'
              } transition-colors duration-200`}
            >
              Projects
            </Link>
            <Link
              href="/blog"
              className={`text-sm ${
                isDark ? 'text-gray-300 hover:text-[#fee6cd]' : 'text-[#18243E]/70 hover:text-[#18243E]'
              } transition-colors duration-200`}
            >
              Blog
            </Link>
          </div>

          <button
            onClick={() => setIsDark(!isDark)}
            className={`p-2 rounded-lg ${
              isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-[#18243E]/10 hover:bg-[#18243E]/20'
            } transition-colors duration-200`}
          >
            {isDark ? (
              <svg className={`h-4 w-4 text-[#fee6cd]`} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className={`h-4 w-4 text-[#18243E]`} fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
        </nav>

        
        <main className="px-8 py-8 max-w-4xl mx-auto relative z-10 animate-in slide-in-from-bottom-4 duration-500">
          
          <Link 
            href="/blog" 
            className={`inline-flex items-center space-x-2 text-sm mb-8 ${
              isDark ? 'text-gray-400 hover:text-[#fee6cd]' : 'text-[#18243E]/60 hover:text-[#18243E]'
            } transition-colors duration-200`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            <span>Back to blog</span>
          </Link>

          
          <div className="mb-8">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center">
                <Image
                  src={isDark ? "/logo.png" : "/logo-dark.png"}
                  alt="Havish Logo"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </div>
              <div>
                <div className={`text-sm font-medium ${
                  isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'
                }`}>
                  havish
                </div>
                <div className={`text-sm ${
                  isDark ? 'text-gray-400' : 'text-[#18243E]/60'
                }`}>
                  published on 2025-06-22 • 15 min read
                </div>
              </div>
            </div>
          </div>

          
          <h1 className={`text-4xl md:text-5xl font-bold mb-8 leading-tight ${
            isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'
          }`}>
            AWS Serverless Architecture: From Concept to Production
          </h1>

          
          <div className={`prose prose-lg max-w-none ${
            isDark ? 'prose-invert' : ''
          }`}>
            <div className={`text-lg leading-relaxed space-y-6 ${
              isDark ? 'text-gray-300' : 'text-[#18243E]/80'
            }`}>
              <p>
                Serverless architecture represents a fundamental shift in how we build and deploy applications. By abstracting away server management, developers can focus on writing business logic while AWS handles the underlying infrastructure. This comprehensive guide walks you through building production-ready serverless applications on AWS.
              </p>

              <h2 className={`text-2xl font-bold mt-8 mb-4 ${
                isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'
              }`}>
                Core Serverless Components
              </h2>

              <p>
                A robust serverless architecture leverages multiple AWS services working in harmony:
              </p>

              <ul className="space-y-2 list-disc list-inside">
                <li><strong>AWS Lambda:</strong> Event-driven compute service for executing code</li>
                <li><strong>API Gateway:</strong> Managed service for creating RESTful and WebSocket APIs</li>
                <li><strong>DynamoDB:</strong> Fully managed NoSQL database with single-digit latency</li>
                <li><strong>S3:</strong> Object storage for static assets and data persistence</li>
                <li><strong>CloudWatch:</strong> Monitoring and logging service for observability</li>
                <li><strong>EventBridge:</strong> Event bus for decoupled application architecture</li>
              </ul>

              <h2 className={`text-2xl font-bold mt-8 mb-4 ${
                isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'
              }`}>
                Architecture Patterns
              </h2>

              <p>
                Let&apos;s explore a typical serverless API architecture using Infrastructure as Code:
              </p>

              <div className={`rounded-lg p-6 my-6 ${
                isDark ? 'bg-gray-800' : 'bg-[#18243E]/10'
              }`}>
                <div className={`text-sm font-medium mb-2 ${
                  isDark ? 'text-gray-400' : 'text-[#18243E]/60'
                }`}>
                  serverless.yml
                </div>
                <pre className={`text-sm overflow-x-auto ${
                  isDark ? 'text-gray-300' : 'text-[#18243E]/80'
                }`}>
{`service: user-management-api

provider:
  name: aws
  runtime: nodejs18.x
  region: us-east-1
  environment:
    USERS_TABLE: \${self:service}-users-\${self:provider.stage}
    JWT_SECRET: \${ssm:/\${self:service}/jwt-secret}
  iamRoleStatements:
    - Effect: Allow
      Action:
        - dynamodb:Query
        - dynamodb:Scan
        - dynamodb:GetItem
        - dynamodb:PutItem
        - dynamodb:UpdateItem
        - dynamodb:DeleteItem
      Resource:
        - "arn:aws:dynamodb:\${self:provider.region}:*:table/\${self:provider.environment.USERS_TABLE}"

functions:
  createUser:
    handler: src/handlers/users.create
    events:
      - http:
          path: users
          method: post
          cors: true
          authorizer: auth
          
  getUser:
    handler: src/handlers/users.get
    events:
      - http:
          path: users/{id}
          method: get
          cors: true
          authorizer: auth

resources:
  Resources:
    UsersTable:
      Type: AWS::DynamoDB::Table
      Properties:
        TableName: \${self:provider.environment.USERS_TABLE}
        AttributeDefinitions:
          - AttributeName: userId
            AttributeType: S
        KeySchema:
          - AttributeName: userId
            KeyType: HASH
        BillingMode: PAY_PER_REQUEST`}
                </pre>
              </div>

              <h2 className={`text-2xl font-bold mt-8 mb-4 ${
                isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'
              }`}>
                Lambda Function Best Practices
              </h2>

              <p>
                Writing efficient Lambda functions requires attention to several key principles:
              </p>

              <div className={`rounded-lg p-6 my-6 ${
                isDark ? 'bg-gray-800' : 'bg-[#18243E]/10'
              }`}>
                <div className={`text-sm font-medium mb-2 ${
                  isDark ? 'text-gray-400' : 'text-[#18243E]/60'
                }`}>
                  user-handler.js
                </div>
                <pre className={`text-sm overflow-x-auto ${
                  isDark ? 'text-gray-300' : 'text-[#18243E]/80'
                }`}>
{`const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');

// Initialize outside handler for connection reuse
const dynamodb = new AWS.DynamoDB.DocumentClient();

const createUser = async (event) => {
  try {
    // Parse and validate input
    const { name, email } = JSON.parse(event.body);
    
    if (!name || !email) {
      return {
        statusCode: 400,
        headers: corsHeaders,
        body: JSON.stringify({ error: 'Name and email are required' })
      };
    }
    
    const userId = uuidv4();
    const timestamp = new Date().toISOString();
    
    const user = {
      userId,
      name,
      email,
      createdAt: timestamp,
      updatedAt: timestamp
    };
    
    // Use consistent error handling
    await dynamodb.put({
      TableName: process.env.USERS_TABLE,
      Item: user,
      ConditionExpression: 'attribute_not_exists(userId)'
    }).promise();
    
    return {
      statusCode: 201,
      headers: corsHeaders,
      body: JSON.stringify(user)
    };
    
  } catch (error) {
    console.error('Error creating user:', error);
    
    return {
      statusCode: error.code === 'ConditionalCheckFailedException' ? 409 : 500,
      headers: corsHeaders,
      body: JSON.stringify({
        error: error.code === 'ConditionalCheckFailedException' 
          ? 'User already exists' 
          : 'Internal server error'
      })
    };
  }
};

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type,Authorization',
  'Access-Control-Allow-Methods': 'OPTIONS,POST,GET,PUT,DELETE'
};

module.exports = { createUser };`}
                </pre>
              </div>

              <h2 className={`text-2xl font-bold mt-8 mb-4 ${
                isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'
              }`}>
                Event-Driven Architecture
              </h2>

              <p>
                Serverless applications excel in event-driven scenarios. Here&apos;s how to implement robust event processing:
              </p>

              <div className={`rounded-lg p-6 my-6 ${
                isDark ? 'bg-gray-800' : 'bg-[#18243E]/10'
              }`}>
                <div className={`text-sm font-medium mb-2 ${
                  isDark ? 'text-gray-400' : 'text-[#18243E]/60'
                }`}>
                  Event Processing Pattern
                </div>
                <pre className={`text-sm overflow-x-auto ${
                  isDark ? 'text-gray-300' : 'text-[#18243E]/80'
                }`}>
{`const processUserEvent = async (event) => {
  const promises = event.Records.map(async (record) => {
    try {
      const eventName = record.eventName;
      const dynamoRecord = record.dynamodb;
      
      switch (eventName) {
        case 'INSERT':
          await handleUserCreated(dynamoRecord.NewImage);
          break;
        case 'MODIFY':
          await handleUserUpdated(dynamoRecord.NewImage, dynamoRecord.OldImage);
          break;
        case 'REMOVE':
          await handleUserDeleted(dynamoRecord.OldImage);
          break;
      }
    } catch (error) {
      // Log error but don&apos;t fail the entire batch
      console.error('Error processing record:', record, error);
      
      // Send to DLQ for retry
      await sendToDeadLetterQueue(record, error);
    }
  });
  
  await Promise.allSettled(promises);
};

const handleUserCreated = async (userImage) => {
  const user = unmarshallDynamoImage(userImage);
  
  // Send welcome email
  await sendWelcomeEmail(user);
  
  // Update analytics
  await updateUserMetrics('user_created', user);
  
  // Publish event to EventBridge
  await publishEvent('user.created', user);
};`}
                </pre>
              </div>

              <h2 className={`text-2xl font-bold mt-8 mb-4 ${
                isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'
              }`}>
                Cost Optimization Strategies
              </h2>

              <p>
                Serverless can be cost-effective when properly optimized. Here are key strategies:
              </p>

              <ol className="space-y-3 list-decimal list-inside">
                <li><strong>Right-size memory allocation:</strong> Monitor CloudWatch metrics to optimize Lambda memory settings</li>
                <li><strong>Use provisioned concurrency sparingly:</strong> Only for functions requiring consistent low latency</li>
                <li><strong>Implement efficient caching:</strong> Use DynamoDB DAX or ElastiCache for frequently accessed data</li>
                <li><strong>Optimize cold starts:</strong> Minimize package size and use connection pooling</li>
                <li><strong>Choose appropriate storage classes:</strong> Use S3 Intelligent-Tiering for cost optimization</li>
              </ol>

              <h2 className={`text-2xl font-bold mt-8 mb-4 ${
                isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'
              }`}>
                Monitoring and Observability
              </h2>

              <p>
                Production serverless applications require comprehensive observability:
              </p>

              <div className={`p-6 my-6 rounded-lg border-l-4 ${
                isDark ? 'bg-blue-900/20 border-blue-600' : 'bg-blue-50 border-blue-400'
              }`}>
                <h3 className={`font-bold mb-2 ${
                  isDark ? 'text-blue-400' : 'text-blue-800'
                }`}>
                  Observability Stack
                </h3>
                <ul className={`text-sm space-y-1 ${
                  isDark ? 'text-blue-200' : 'text-blue-700'
                }`}>
                  <li>• <strong>CloudWatch Logs:</strong> Centralized logging with structured log format</li>
                  <li>• <strong>X-Ray:</strong> Distributed tracing for request flow visualization</li>
                  <li>• <strong>CloudWatch Metrics:</strong> Custom business metrics and alerting</li>
                  <li>• <strong>AWS Config:</strong> Configuration compliance monitoring</li>
                </ul>
              </div>

              <h2 className={`text-2xl font-bold mt-8 mb-4 ${
                isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'
              }`}>
                Security Best Practices
              </h2>

              <ul className="space-y-2 list-disc list-inside">
                <li><strong>Principle of Least Privilege:</strong> Grant minimal IAM permissions required</li>
                <li><strong>Environment Variable Encryption:</strong> Use AWS KMS for sensitive data</li>
                <li><strong>VPC Configuration:</strong> Deploy Lambda in VPC when accessing private resources</li>
                <li><strong>API Authentication:</strong> Implement JWT or AWS Cognito for user authentication</li>
                <li><strong>Resource-Based Policies:</strong> Use fine-grained access controls</li>
              </ul>

              <h2 className={`text-2xl font-bold mt-8 mb-4 ${
                isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'
              }`}>
                Testing Strategies
              </h2>

              <p>
                Comprehensive testing is crucial for serverless applications:
              </p>

              <div className={`rounded-lg p-6 my-6 ${
                isDark ? 'bg-gray-800' : 'bg-[#18243E]/10'
              }`}>
                <div className={`text-sm font-medium mb-2 ${
                  isDark ? 'text-gray-400' : 'text-[#18243E]/60'
                }`}>
                  Jest Test Example
                </div>
                <pre className={`text-sm overflow-x-auto ${
                  isDark ? 'text-gray-300' : 'text-[#18243E]/80'
                }`}>
{`// Mock AWS SDK
jest.mock('aws-sdk');

describe('User Handler', () => {
  beforeEach(() => {
    process.env.USERS_TABLE = 'test-users-table';
    AWS.DynamoDB.DocumentClient.mockClear();
  });

  test('should create user successfully', async () => {
    const mockPut = jest.fn().mockReturnValue({
      promise: () => Promise.resolve({})
    });
    
    AWS.DynamoDB.DocumentClient.mockImplementation(() => ({
      put: mockPut
    }));

    const event = {
      body: JSON.stringify({
        name: 'John Doe',
        email: 'john@example.com'
      })
    };

    const result = await createUser(event);
    
    expect(result.statusCode).toBe(201);
    expect(mockPut).toHaveBeenCalledWith(
      expect.objectContaining({
        TableName: 'test-users-table'
      })
    );
  });
});`}
                </pre>
              </div>

              <p>
                Serverless architecture on AWS provides a powerful foundation for building scalable, cost-effective applications. By following these patterns and best practices, you can create production-ready systems that automatically scale with demand while minimizing operational overhead.
              </p>
            </div>
          </div>

          
          <div className={`mt-16 pt-8 border-t ${
            isDark ? 'border-gray-700' : 'border-[#18243E]/20'
          }`}>
            <div className="flex items-center justify-between">
              <Link 
                href="/blog" 
                className={`inline-flex items-center space-x-2 ${
                  isDark ? 'text-gray-400 hover:text-[#fee6cd]' : 'text-[#18243E]/60 hover:text-[#18243E]'
                } transition-colors duration-200`}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                <span>Back to all posts</span>
              </Link>
              
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/havishpallerla" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`${
                    isDark ? 'text-gray-400 hover:text-[#fee6cd]' : 'text-[#18243E]/60 hover:text-[#18243E]'
                  } transition-colors duration-200`}
                >
                  <Image
                    src={isDark ? "/icons/github-dark.svg" : "/icons/github.svg"}
                    alt="github"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
